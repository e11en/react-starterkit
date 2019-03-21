import * as statePieceActions from '@state/statePiece/actions/statePiece.actions';
import { ActionType } from 'typesafe-actions';

export type StatePieceActions = ActionType<typeof statePieceActions>;