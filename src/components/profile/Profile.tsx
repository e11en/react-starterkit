import { createStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { IUserState, withUser } from '@state/user/user.container';
import { IClasses } from 'core/interfaces/IClasses';
import * as React from 'react';
import { compose } from 'recompose';

const styles = createStyles({
  wrapper: {
    display: 'grid'
  }
});

class Profile extends React.PureComponent<IClasses & IUserState> {
  public render() {
    const { classes, user } = this.props;

    if (!user) {
      return null;
    }

    return (
      <div className={classes.wrapper}>
        {
          Object.keys(user).map((key: string) => {
            if (typeof user[key] === 'function') {
              return;
            }
            if (typeof user[key] === 'object') {
              this.renderObject(user[key], key);
            }

            return <TextField key={`profile-${key}`} label={key} value={user[key]} />;
          })
        }
      </div>
    );
  }

  // tslint:disable-next-line:no-any
  private renderObject = (object: any, key: string) => {
    const obj = object;
    Object.keys(obj).map((k: string) => {
      console.log(typeof obj[k], obj[k]);

      if (typeof obj[k] === 'object') {
        this.renderObject(obj[k], k);
      }

      return <TextField key={`profile-${key}-${k}`} label={k} value={obj[k]} />;
    });
  }
}

export default compose(
  withStyles(styles),
  withUser()
)(Profile);
