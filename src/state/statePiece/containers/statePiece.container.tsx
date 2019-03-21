import { RootState } from '@state/reducers/root.reducers';
import { doSomething } from '@state/statePiece/actions/statePiece.actions';
import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Dispatch } from 'redux';

export interface IStatePieceState {
  something: string;
}

export interface IStatePieceActions {
  doSomething(payload: string): void;
}

const mapStateToProps = (state: RootState): IStatePieceState => {
  return {
    something: state.statePiece.something
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IStatePieceActions => ({
  doSomething: (payload: string) => {
    dispatch(doSomething(payload));
  }
});

export const withSomething = () => (Component: React.ComponentType) => {
  class Container extends React.PureComponent<IStatePieceState & IStatePieceActions> {
    public render() {
      return <Component {...this.props} />;
    }
  }

  return compose(
    connect(mapStateToProps, mapDispatchToProps)
    // branch((props: IStatePieceState) => !props.something, renderNothing)
  )(Container);
};
