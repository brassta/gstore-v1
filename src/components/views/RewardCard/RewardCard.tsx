import * as React from 'react';
import classNames from 'classnames';

import Button from '@components/Button';
import Card, { CardTypes } from '@components/Card';
import Amount from '@components/Amount';
import { Reward } from 'src/types';

const baseClass = 'gc-competition-card';

export interface Props {
  type?: CardTypes;
  reward: Reward;
  handleClaimReward: () => void;
  handleViewLadder: () => void;
  viewLadderDisplayName: string;
  feeDisplayName: string;
  ladderDisplayName: string;
  onGoingDisplayName: string;
  prizeDisplayName: string;
  startTimeDisplayName: string;
  isDesktop: boolean;
  className?: string;
  rankDisplayName: string;
  getRewardDisplayName: string;
  claimedDisplayName: string;
  history: any;
}

const CardContent: any = ({ prize, currency, prizeDisplayName }: any) => (
  <React.Fragment>
    <label className="gc-card__info">
      <small className="gc-card__label">{prizeDisplayName}</small>
      <strong className="gc-card__value">
        <span className="gc-text--gold">
          <Amount
            value={prize}
            currency={currency}
            size="large"
            align="right"
            showIcon
          />
        </span>
      </strong>
    </label>
  </React.Fragment>
);

class RewardCard extends React.PureComponent<Props> {
  render() {
    const {
      type,
      reward,
      className,
      handleClaimReward,
      viewLadderDisplayName,
      handleViewLadder,
      getRewardDisplayName,
      claimedDisplayName,
    } = this.props;

    const { prize, currency, status } = reward;
    const classes = classNames(baseClass, className);
    const claimed = status !== 'active';

    return (
      <Card
        type={type}
        title={name}
        details={
          <CardContent {...this.props} prize={prize} currency={currency} />
        }
        action={
          <React.Fragment>
            {type === 'full' && (
              <Button
                onClick={handleClaimReward}
                type="primary"
                disabled={claimed}>
                {claimed ? claimedDisplayName : getRewardDisplayName}
              </Button>
            )}
            <Button onClick={handleViewLadder}>{viewLadderDisplayName}</Button>
          </React.Fragment>
        }
        onClick={type === 'full' ? f => f : handleClaimReward}
        className={classes}
      />
    );
  }
}

export default RewardCard;
