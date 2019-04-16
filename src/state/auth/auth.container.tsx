import { setIsAuthenticated } from '@state/auth/auth.actions';
import { RootState } from '@state/reducers/root.reducers';
import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Dispatch } from 'redux';

export interface IAuthState {
  isAuthenticated: boolean;
}

export interface IAuthActions {
  setIsAuthenticated(payload: boolean): void;
}

const mapStateToProps = (state: RootState): IAuthState => {
  return {
    isAuthenticated: true
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IAuthActions => ({
  setIsAuthenticated: (payload: boolean) => {
    dispatch(setIsAuthenticated(payload));
  }
});

export const withAuth = () => (Component: React.ComponentType) => {
  class Container extends React.PureComponent<IAuthState> {
    public render() {
      return <Component {...this.props} />;
    }
  }

  return compose(
    connect(mapStateToProps, mapDispatchToProps)
  )(Container);
};
