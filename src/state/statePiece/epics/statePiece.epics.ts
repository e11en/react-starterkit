import { RootState } from '@state/reducers/root.reducers';
import { StatePieceActions } from '@state/statePiece/actions';
import { doSomething, doSomethingFailed, doSomethingSuccess } from '@state/statePiece/actions/statePiece.actions';
import { Epic } from 'redux-observable';
import { of } from 'rxjs';
import { filter, mergeMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';

export const doSomething$: Epic<StatePieceActions, StatePieceActions, RootState> = (action$, state$) =>
  action$.pipe(
    filter(isActionOf(doSomething)),
    mergeMap((action) => {
      const name = action.payload.name;

      try {
        return of(doSomethingSuccess(`Hello ${name}`));
      }
      catch (err) {
        return of(doSomethingFailed(err));
      }
    })
  );