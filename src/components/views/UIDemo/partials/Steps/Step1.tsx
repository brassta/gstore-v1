import * as React from 'react';

import Icon from '@components/Icon';
import iconError from '@images/icon-error-outline.svg';

export default class Step1 extends React.Component<any> {
  state = {
    data: 'Step1 data',
  };

  render() {
    // console.log('Step1', this.props);
    return (
      <div className="Step1">
        <h4>Don’t lose this!</h4>
        <p className="gc-text--secondary">
          Write this 12-word mnemonic phrase down and keep it somewhere safe.
          Don't lose it! Without your mnemonic phrase, you can't access your
          wallet and we can't help you.
        </p>
        <p className="gc-text--error">
          <Icon data={iconError} size="large" spacing="right" /> The phrase must
          be exactly as you see it here.
        </p>
        <samp>
          some randomly generated twelve words that mean nothing or have any
          sense
        </samp>
      </div>
    );
  }
}
