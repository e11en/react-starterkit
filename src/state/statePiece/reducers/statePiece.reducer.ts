import { StatePieceActions } from '@state/statePiece/actions';
import * as statePieceActions from '@state/statePiece/actions/statePiece.actions';
import { getType } from 'typesafe-actions';

export interface IStatePieceState {
  something: string;
}

const initialState: IStatePieceState = {
  something: '123'
};

export default (state = initialState, action: StatePieceActions) => {
  switch (action.type) {
    case getType(statePieceActions.doSomething):
      return {
        ...state,
        something: action.payload.name
      };
    default:
      return state;
  }
};
