import { IUserState } from '@state/user/user.container';
import userReducer from '@state/user/user.reducer';
import { AnyAction, combineReducers } from 'redux';

export type RootState = {
  readonly user: IUserState;
};

export const rootReducers = combineReducers({
  user: userReducer
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
