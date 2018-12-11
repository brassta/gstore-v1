import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import { MINIMUM_DONATION } from 'src/constants';
import Amount from '@components/Amount';
import Button from '@components/Button';

export interface Props {
  dailyTasksUrl: string;
  quizzesUrl: string;
  tournamentsUrl: string;
  GShareUrl: string;
  insufficientFundsHeadingDisplayName: string;
  insufficientFundsText: FormattedMessage.MessageDescriptor;
  insufficientFundsDonateText: FormattedMessage.MessageDescriptor;
  insufficientFundsDailyTasksDisplayName: string;
  insufficientFundsQuizzesDisplayName: string;
  insufficientFundsTournamentsDisplayName: string;
  insufficientFundsOKDisplayName: string;
  handleOkClick: () => void;
  isForDonation: boolean;
  insufficientFundsJoinLadderTextDisplayName: string;
}

const baseClass = 'gc-insufficient-funds';

const InsufficientFunds: React.SFC<Props> = ({
  insufficientFundsHeadingDisplayName,
  insufficientFundsText,
  dailyTasksUrl,
  insufficientFundsDailyTasksDisplayName,
  insufficientFundsQuizzesDisplayName,
  quizzesUrl,
  insufficientFundsTournamentsDisplayName,
  tournamentsUrl,
  GShareUrl,
  handleOkClick,
  insufficientFundsOKDisplayName,
  isForDonation,
  insufficientFundsDonateText,
  insufficientFundsJoinLadderTextDisplayName,
}) => (
  <React.Fragment>
    <div className={baseClass}>
      <h2 className={`${baseClass}__heading`}>
        {insufficientFundsHeadingDisplayName}
      </h2>
      <p className={`${baseClass}__text`}>
        {isForDonation ? (
          <FormattedMessage
            {...insufficientFundsDonateText}
            values={{
              minimumDonation: (
                <Amount
                  value={MINIMUM_DONATION}
                  currency={'gold'}
                  showIcon={true}
                  showCurrency={false}
                  align="right"
                  className={`${baseClass}__text__currency`}
                />
              ),
            }}
          />
        ) : (
          insufficientFundsJoinLadderTextDisplayName
        )}{' '}
        <FormattedMessage
          {...insufficientFundsText}
          values={{
            dailyTasksLink: (
              <a href={dailyTasksUrl}>
                {insufficientFundsDailyTasksDisplayName}
              </a>
            ),
            quizzesLink: (
              <a href={quizzesUrl}>{insufficientFundsQuizzesDisplayName}</a>
            ),
            tournamentsLink: (
              <a href={tournamentsUrl}>
                {insufficientFundsTournamentsDisplayName}
              </a>
            ),
            GShareLink: <a href={GShareUrl}>GShare</a>,
          }}
        />
      </p>
    </div>
    <div className={`gc-modal__footer gc-modal__footer--center`}>
      <Button type="primary" onClick={handleOkClick}>
        {insufficientFundsOKDisplayName}
      </Button>
    </div>
  </React.Fragment>
);

export default InsufficientFunds;
