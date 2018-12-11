import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import Shield from '@images/shield.svg';

export interface Props {
  step2HeadingDisplayName: string;
  step2Text: FormattedMessage.MessageDescriptor;
}

const Step2: React.SFC<Props> = ({ step2HeadingDisplayName, step2Text }) => (
  <React.Fragment>
    <figure>
      <Shield />
    </figure>
    <h2>{step2HeadingDisplayName}</h2>
    <p>
      <FormattedMessage
        {...step2Text}
        values={{
          win: (
            <React.Fragment>
              <span className={'gc-intro__gold'}>GN GOLD</span> and{' '}
              <span className={'gc-intro__mgo'}>MGO Tokens</span>
            </React.Fragment>
          ),
        }}
      />
    </p>
  </React.Fragment>
);

export default Step2;
