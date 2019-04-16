import { SET_IS_AUTHENTICATED } from '@state/auth/auth.actions';
import { IAuthState } from '@state/auth/auth.container';
import { AnyAction } from 'redux';

const initialState: IAuthState = {
  isAuthenticated: false
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated
      };
    default:
      return state;
  }
};
