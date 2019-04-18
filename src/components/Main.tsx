import Dashboard from '@components/dasboard/Dashboard';
import Login from '@components/Login';
import Profile from '@components/profile/Profile';
import Topbar from '@components/topbar/Topbar';
import { LANDING, LOGIN, PROFILE } from '@core/constants/routes';
import { IClasses } from '@core/interfaces/IClasses';
import { addUser, userExists } from '@data/user';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import { User } from '@model/User';
import { IAuthActions, IAuthState, withAuth } from '@state/auth/auth.container';
import { IUserActions, IUserState, withUser } from '@state/user/user.container';
import firebase from 'firebase';
import * as React from 'react';
import { Route, RouteComponentProps, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

const styles = {
  root: {
    flexGrow: 1
  },
  appBar: {
    marginBottom: 20
  }
};

interface IProps extends IClasses, RouteComponentProps, IAuthState, IAuthActions, IUserState, IUserActions { }

class Main extends React.PureComponent<IProps> {
  constructor(props: IProps) {
    super(props);
    const currentUser = this.props.user;
    firebase.auth().onAuthStateChanged((firebaseUser: firebase.User | null) => {
      // User is not authenticated, redirect to login
      if (!firebaseUser) {
        this.props.history.push('/login');
      }

      this.props.setIsAuthenticated(!!firebaseUser);

      if (!currentUser && firebaseUser) {
        userExists(firebaseUser.uid).then(result => {
          if (result.exists && result.user) {
            this.props.setUser(new User(result.user));
          }
          else {
            const newUser = new User({
              id: firebaseUser.uid,
              name: firebaseUser.displayName ? firebaseUser.displayName : '',
              email: firebaseUser.email ? firebaseUser.email : '',
              weight: 0
            });

            addUser(newUser);
            this.props.setUser(newUser);
          }
        });
      }
      else if (currentUser) {
        this.props.resetUser();
      }
    });
  }

  public render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <AppBar className={classes.appBar} position="static">
          <Topbar />
        </AppBar>

        {/* ROUTES */}
        <Route exact={true} path={LANDING} component={Dashboard} />
        <Route path={LOGIN} component={Login} />
        <Route path={PROFILE} component={Profile} />
      </React.Fragment>
    );
  }
}

export default compose(
  withRouter,
  withStyles(styles),
  withAuth(),
  withUser()
)(Main);
