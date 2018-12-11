import * as React from 'react';

export default class Step2 extends React.Component<any> {
  state = {
    data: 'Step2 data',
  };

  render() {
    // console.log('Step2', this.props);
    return (
      <div className="Step2">
        <h4>Confirm that your mnemonic phrase is safe.</h4>
        <p className="gc-text--secondary">
          Write this 12-word mnemonic phrase down and keep it somewhere safe.
          Don't lose it! Without your mnemonic phrase, you can't access your
          wallet and we can't help you.
        </p>
      </div>
    );
  }
}
