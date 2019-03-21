import statePieceReducer, { IStatePieceState } from '@state/statePiece/reducers/statePiece.reducer';
import { AnyAction, combineReducers } from 'redux';

export type RootState = {
  readonly statePiece: IStatePieceState;
};

export const rootReducers = combineReducers({
  statePiece: statePieceReducer
});

//tslint:disable-next-line:no-any
export const rootReducer = (state: any, action: AnyAction): any => {
  switch (action.type) {
    case 'SOME OVERALL ACTION':
      state = {
        statePiece: state.statePiece
      };
    default:
  }

  return rootReducers(state, action);
};
