import { SET_USER } from '@state/user/user.actions';
import { IUserState } from '@state/user/user.container';
import { AnyAction } from 'redux';

const initialState: IUserState = {};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload.user
      };
    default:
      return state;
  }
};
