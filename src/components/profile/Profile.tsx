import { isNotInArray } from '@core/helpers';
import { IClasses } from '@core/interfaces/IClasses';
import { createStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { IUserState, withUser } from '@state/user/user.container';
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
          Object.keys(user)
          .filter((key: string) => isNotInArray(key, ['displayName']))
          .map((key: string) => {
            if (typeof user[key] === 'function') {
              return;
            }

            if (typeof user[key] === 'object') {
              return this.renderObject(user[key], key);
            } else {
              return <TextField key={`profile-${key}`} label={key} value={user[key]} />;
            }
          })
        }
      </div>
    );
  }

  // tslint:disable-next-line:no-any
  private renderObject = (object: any, key: string) => {
    return Object.keys(object).map((k: string) => <TextField key={`profile-${key}-${k}`} label={k} value={object[k]} />);
  }
}

export default compose(
  withStyles(styles),
  withUser()
)(Profile);
