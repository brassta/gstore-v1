import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import Hand from '@images/hand.svg';

export interface Props {
  step1HeadingDisplayName: string;
  step1Text: FormattedMessage.MessageDescriptor;
}

const Step1: React.SFC<Props> = ({ step1HeadingDisplayName, step1Text }) => (
  <React.Fragment>
    <figure>
      <Hand />
    </figure>
    <h2>{step1HeadingDisplayName}</h2>
    <p>
      <FormattedMessage
        {...step1Text}
        values={{
          received: <span className={'gc-intro__gold'}>50 GN GOLD</span>,
        }}
      />
    </p>
  </React.Fragment>
);

export default Step1;
