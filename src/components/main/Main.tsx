import { IStatePieceState, withSomething } from '@state/statePiece/containers/statePiece.container';
import * as React from 'react';
import { compose } from 'recompose';

export class MainComponent extends React.PureComponent<IStatePieceState> {
  public render() {
    const { something } = this.props;

      return (
        <div>
          <h1>Welcome to the React Starterkit!</h1>
          {
            something && <p>Something is filled with: {something}</p>
          }
        </div>
      );
  }
}

export default compose(
  withSomething()
)(MainComponent);
