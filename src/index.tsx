import 'index.css';
import 'typeface-roboto';

import { App } from '@components/App';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from 'registerServiceWorker';

// tslint:disable-next-line:no-import-side-effect
ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
