import { isNotInArray } from '@core/helpers';
import { IClasses } from '@core/interfaces/IClasses';
import Button from '@material-ui/core/Button';
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
  public state = {
    user: this.props.user
  };

  public componentDidUpdate() {
    // Initialize state when user is available
    if (this.props.user && !this.state.user) {
      this.setState({ user: this.props.user });
    }
  }

  public render() {
    const { classes } = this.props;
    const { user } = this.state;

    if (!user) {
      return null;
    }

    return (
      <form className={classes.wrapper} onSubmit={this.submitHandler}>
        {
          Object.keys(user)
            .filter((key: string) => isNotInArray(key, ['displayName']))
            .map((key: string) => {
              if (typeof user[key] === 'function') {
                return;
              }

              if (typeof user[key] === 'object') {
                return this.renderObject(key, user[key]);
              } else {
                return this.renderField(key, user[key], key);
              }
            })
        }

        <Button type="submit">Save</Button>
      </form>
    );
  }

  private submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  private changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const key = event.target.name;
    const isConstructedKey = key.includes('.');
    let newUser;

    if (!isConstructedKey) {
      newUser = {
        ...this.state.user,
        [key]: event.target.value
      };
    }
    else {
      const { user } = this.state;
      if (!user) {
        return;
      }
      const constructedKey = key.split('.');
      newUser = {
        ...user,
        [constructedKey[0]]: {
          ...user[constructedKey[0]],
          [constructedKey[1]]: event.target.value
        }
      };
    }

    this.setState({ user: newUser });
  }

  // tslint:disable-next-line:no-any
  private renderObject = (key: string, object: any) => {
    return Object.keys(object).map((k: string) => this.renderField(`${key}.${k}`, object[k], k));
  }

  // tslint:disable-next-line:no-any
  private renderField = (key: string, value: any, label: string) => {
    return <TextField key={`profile-${key}`} name={key} label={label} value={value} onChange={this.changeHandler} required={true} />;
  }
}

export default compose(
  withStyles(styles),
  withUser()
)(Profile);
