import * as React from 'react';

import RewardCard from '@views/RewardCard';
import { Competition } from 'src/types';

export interface Props {
  competitions: Competition[];
}

const baseClass = 'gc-previous-ladder';

const Rewards: React.SFC<Props> = ({ competitions }) => (
  <div className={baseClass}>
    <div className="gc-cards gc-competition-cards">
      {competitions.map(reward => (
        <RewardCard type="full" key={reward.id} reward={reward} />
      ))}
    </div>
  </div>
);

export default Rewards;
