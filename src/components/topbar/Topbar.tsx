import UserMenu from '@components/topbar/UserMenu';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { IClasses } from 'core/interfaces/IClasses';
import * as React from 'react';
import { compose } from 'recompose';

const styles = {
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class Topbar extends React.PureComponent<IClasses> {
  public render() {
    const { classes } = this.props;

    return (
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="headline" color="inherit" className={classes.grow}>
          React
        </Typography>
        <UserMenu />
      </Toolbar>
    );
  }
}

export default compose(
  withStyles(styles)
)(Topbar);
