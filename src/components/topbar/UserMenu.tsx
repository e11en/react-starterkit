import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { IUserState, withUser } from '@state/user/user.container';
import { LOGIN, PROFILE } from 'core/constants/routes';
import firebase from 'firebase';
import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

interface IProps extends RouteComponentProps, IUserState { }

class UserMenu extends React.PureComponent<IProps> {
  public state = {
    anchorEl: null
  };

  public render() {
    const { user } = this.props;
    const { anchorEl } = this.state;

    if (!user) {
      return null;
    }

    return (
      <React.Fragment>
        <Button
          color="inherit"
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          {user.displayName}
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          getContentAnchorEl={null}
        >
          <MenuItem onClick={this.logoutHandler}>Logout</MenuItem>
          <MenuItem onClick={this.routeHandler(PROFILE)}>Profile</MenuItem>
        </Menu>
      </React.Fragment>
    );
  }

  private logoutHandler = () => {
    firebase.auth().signOut().then(() => {
      this.handleClose();
      this.props.history.push(LOGIN);
    });
  }

  private routeHandler = (route: string) => () => {
    this.handleClose();
    this.props.history.push(route);
  }

  private handleClick = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({ anchorEl: event.currentTarget });
  }

  private handleClose = () => {
    this.setState({ anchorEl: null });
  }
}

export default compose(
  withRouter,
  withUser()
)(UserMenu);
