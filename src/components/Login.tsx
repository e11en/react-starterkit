import { withStyles } from '@material-ui/core/styles';
import { IClasses } from 'core/interfaces/IClasses';
import firebase from 'firebase';
import * as React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { compose } from 'recompose';

const styles = {
  login: {
    marginTop: 50
  }
};

class Login extends React.PureComponent<IClasses> {
  public render() {
    const { classes } = this.props;
    const uiConfig = {
      signInFlow: 'redirect',
      signInSuccessUrl: '/',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
          requireDisplayName: false
        }
      ]
    };

    return <StyledFirebaseAuth className={classes.login} uiConfig={uiConfig} firebaseAuth={firebase.auth()} />;
  }
}

export default compose(
  withStyles(styles)
)(Login);
