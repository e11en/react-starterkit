import { IUser } from '@model/User';
import { createAction } from 'typesafe-actions';

export const SET_USER = '[User] Set user';
export const SET_USER_SUCCESS = '[User] Set user success';
export const DSET_USER_FAILED = '[User] Set user failed';

export const setUser = createAction(SET_USER, action => (user?: IUser) => action({ user }));