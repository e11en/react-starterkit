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
    user: this.props.user,
    error: []
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
          this.getUserRelevantFields()
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

  private getUserRelevantFields = () => {
    if (this.state.user) {
      return Object.keys(this.state.user).filter((key: string) => isNotInArray(key, ['id', 'displayName']));
    }

    return [];
  }

  private submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (this.valid()) {
      console.log('VALID', this.state.user);
    }
  }

  private valid = () => {
    const { user } = this.state;
    let valid = true;
    if (!user) {
      return false;
    }
    this.getUserRelevantFields()
      .map((key: string) => {
        if (typeof user[key] === 'object') {
          Object.keys(user[key]).map((k: string) => {
            const empty = this.isEmpty(user[key][k]);
            if (empty) {
              this.setState({
                error: {
                  ...this.state.error,
                  [`${key}.${k}`]: 'empty'
                }
              });
              valid = false;
            }
          });
        }
        else {
          const empty = this.isEmpty(user[key]);
          if (empty) {
            this.setState({
              error: {
                ...this.state.error,
                [key]: 'empty'
              }
            });
            valid = false;
          }
        }

      });

    return valid;
  }

  // tslint:disable-next-line:no-any
  private isEmpty = (val: any) => {
    const value = `${val}`.trim();

    if (value === '' || value === undefined || value === null) {
      return true;
    }

    return false;
  }

  private changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const key = event.target.name;
    const isConstructedKey = key.includes('.');
    let newUser;
    const isNumber = event.target.type === 'number';
    const value = isNumber && !!event.target.value  ? parseInt(event.target.value) : event.target.value;

    if (!isConstructedKey) {
      newUser = {
        ...this.state.user,
        [key]: value
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
          [constructedKey[1]]: value
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
    const hasError = this.state.error[key] !== undefined;

    return <TextField
      key={`profile-${key}`}
      name={key}
      label={label}
      value={value}
      type={this.getInputType(key, value)}
      onChange={this.changeHandler}
      required={true}
      error={hasError}
    />;
  }

  // tslint:disable-next-line:no-any
  private getInputType = (key: string, value: any) => {
    if (key === 'email') {
      return 'email';
    }

    return typeof value === 'number' ? 'number' : 'text';
  }
}

export default compose(
  withStyles(styles),
  withUser()
)(Profile);
