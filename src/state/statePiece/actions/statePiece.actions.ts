import { createAction } from 'typesafe-actions';

export const DO_SOMETHING = 'DO SOMETHING';
export const DO_SOMETHING_SUCCESS = 'DO SOMETHING SUCCESS';
export const DO_SOMETHING_FAILED = 'DO SOMETHING FAILED';

export const doSomething = createAction(DO_SOMETHING, action => (name: string) =>
  action({ name }));

export const doSomethingSuccess = createAction(DO_SOMETHING_SUCCESS, action => (greeting: string) =>
  action({ greeting }));

export const doSomethingFailed = createAction(DO_SOMETHING_FAILED, action => (err: Error) =>
  action({ err }));