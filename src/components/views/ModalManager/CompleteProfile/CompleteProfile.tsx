import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import Amount from '@components/Amount';
import Button from '@components/Button';

export interface Props {
  completeProfileTitle: FormattedMessage.MessageDescriptor;
  completeProfileTextDisplayName: string;
  amountGold: number;
  okButtonTextDisplayName: string;
  handleOkClick: () => void;
}

const baseClass = 'gc-complete-profile';

const CompleteProfile: React.SFC<Props> = ({
  completeProfileTitle,
  amountGold,
  completeProfileTextDisplayName,
  okButtonTextDisplayName,
  handleOkClick,
}) => (
  <div className={baseClass}>
    <h3>
      {' '}
      <FormattedMessage
        {...completeProfileTitle}
        values={{
          award: (
            <Amount
              value={amountGold}
              currency={'gold'}
              showIcon={true}
              showCurrency={false}
              align="right"
              className={`${baseClass}__award`}
            />
          ),
        }}
      />
    </h3>
    <p className={`${baseClass}__text`}>{completeProfileTextDisplayName}</p>
    <div className={`${baseClass}__footer`}>
      <Button type="primary" onClick={handleOkClick}>
        {okButtonTextDisplayName}
      </Button>
    </div>
  </div>
);

export default CompleteProfile;
