import * as React from 'react';

import CompetitionCard from '@views/CompetitionCard';
import { Competition } from 'src/types';

export interface Props {
  competitions: Competition[];
}

const baseClass = 'gc-previous-ladder';

const MyCompetitions: React.SFC<Props> = ({ competitions }) => (
  <div className={baseClass}>
    <div className="gc-cards gc-competition-cards">
      {competitions.map(competition => (
        <CompetitionCard
          type="full"
          key={competition.name}
          competition={competition}
        />
      ))}
    </div>
  </div>
);

export default MyCompetitions;
