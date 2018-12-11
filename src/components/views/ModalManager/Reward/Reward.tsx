import * as React from 'react';

import RewardSvg from '@images/reward.svg';
import Amount from '@components/Amount';

export interface Props {
  yourRewardDisplayName: string;
  goldEarned: number;
}

const baseClass = 'gc-reward';

const Reward: React.SFC<Props> = ({ yourRewardDisplayName, goldEarned }) => (
  <div className={baseClass}>
    <RewardSvg className={`${baseClass}__image`} />
    <h4 className="gc-text--center">{yourRewardDisplayName}</h4>
    <Amount
      value={goldEarned}
      currency="gold"
      size="huge"
      align="right"
      showIcon
      className={`${baseClass}__amount`}
    />
  </div>
);

export default Reward;
