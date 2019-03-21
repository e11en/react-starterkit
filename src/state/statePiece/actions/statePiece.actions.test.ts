import {
  DO_SOMETHING,
  DO_SOMETHING_FAILED,
  DO_SOMETHING_SUCCESS,
  doSomething,
  doSomethingFailed,
  doSomethingSuccess,
} from '@state/statePiece/actions/statePiece.actions';

describe('DO_SOMETHING with state', () => {

  it('should do something', () => {
    const payload = { name: 'John Doe' };
    const expected = { type: DO_SOMETHING, payload };
    const actual = doSomething(payload.name);

    expect(actual.payload.name).toEqual(expected.payload.name);
  });

  it('should do something success', () => {
    const payload = { greeting: 'Hello John Doe' };
    const expected = { type: DO_SOMETHING_SUCCESS, payload };
    const actual = doSomethingSuccess(payload.greeting);

    expect(actual).toEqual(expected);
  });

  it('should do something failed', () => {
    const payload = { err: new Error('Unknown person') };
    const expected = { type: DO_SOMETHING_FAILED, payload };
    const actual = doSomethingFailed(payload.err);

    expect(actual).toEqual(expected);
  });
});
