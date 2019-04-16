import { createAction } from 'typesafe-actions';

export const SET_IS_AUTHENTICATED = '[Auth] Set is authenticated';

export const setIsAuthenticated = createAction(SET_IS_AUTHENTICATED, action => (isAuthenticated: boolean) => action({ isAuthenticated }));