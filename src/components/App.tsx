import Main from '@components/main/Main';
import createGenerateClassName from '@material-ui/core/styles/createGenerateClassName';
import jssPreset from '@material-ui/core/styles/jssPreset';
import { configure } from '@state/store';
import { create } from 'jss';
import * as React from 'react';
import { Provider } from 'react-redux';

// tslint:disable-next-line:no-var-requires no-require-imports
const JssProvider = require('react-jss/lib/JssProvider').default;

const styleNode = document.createComment('jss-insertion-point');
const documentHead = document.head;
if (documentHead) {
  documentHead.insertBefore(styleNode, documentHead.firstChild);
}
const generateClassName = createGenerateClassName();
const options = jssPreset();
options.insertionPoint = 'jss-insertion-point';
const jss = create(options);

export class App extends React.PureComponent {
  public render() {
    const store = configure(this.preloadedState());

    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <Provider store={store}>
          <Main />
        </Provider>
      </JssProvider>
    );
  }

  private preloadedState = () => ({
  })
}
