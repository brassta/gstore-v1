import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import Mgo from '@images/mgo_icon.svg';

export interface Props {
  step3HeadingDisplayName: string;
  step3Text: FormattedMessage.MessageDescriptor;
}

const Step3: React.SFC<Props> = ({ step3HeadingDisplayName, step3Text }) => (
  <React.Fragment>
    <figure>
      <Mgo />
    </figure>
    <h2>{step3HeadingDisplayName}</h2>
    <p>
      <FormattedMessage {...step3Text} />
    </p>
  </React.Fragment>
);

export default Step3;
