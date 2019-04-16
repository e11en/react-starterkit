import { IUser } from '@model/User';
import { RootState } from '@state/reducers/root.reducers';
import { setUser } from '@state/user/user.actions';
import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Dispatch } from 'redux';

export interface IUserState {
  user?: IUser;
}

export interface IUserActions {
  setUser(payload: IUser): void;
  resetUser(): void;
}

const mapStateToProps = (state: RootState): IUserState => {
  return {
    user: state.user.user
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IUserActions => ({
  setUser: (payload: IUser) => {
    dispatch(setUser(payload));
  },
  resetUser: () => {
    dispatch(setUser(undefined));
  }
});

export const withUser = () => (Component: React.ComponentType) => {
  class Container extends React.PureComponent<IUserState> {
    public render() {
      return <Component {...this.props} />;
    }
  }

  return compose(
    connect(mapStateToProps, mapDispatchToProps)
  )(Container);
};
