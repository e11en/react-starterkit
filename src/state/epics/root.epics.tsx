import statePieceEpics from '@state/statePiece/epics';
import { combineEpics } from 'redux-observable';

export const rootEpics = combineEpics(
  ...statePieceEpics
 );
