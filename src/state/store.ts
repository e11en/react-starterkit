import { rootReducer } from '@state/reducers/root.reducers';
import { applyMiddleware, createStore, Middleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

const middleware: Middleware[] = [
  createLogger()
];

//tslint:disable-next-line:no-any
export function configure(preloadedState: any) {
  return createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(...middleware)
    )
  );
}
