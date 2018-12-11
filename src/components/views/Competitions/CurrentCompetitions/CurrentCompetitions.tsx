import * as React from 'react';

import CompetitionCardPlaceholder from '@images/placeholders/competition-card.svg';
import CompetitionCard from '@views/CompetitionCard';

import { Competition } from 'src/types';

export interface Props {
  competitions: Competition[];
  placeholderCount: number;
  isLoading: boolean;
}

const baseClass = 'gc-current-ladder';

const CurrentCompetitions: React.SFC<Props> = ({
  competitions,
  placeholderCount,
  isLoading,
}) => (
  <div className={baseClass}>
    <section className={`${baseClass}__content`}>
      <div className="gc-cards gc-competition-cards" aria-busy={isLoading}>
        <section className="gc-competition-cards__content">
          {competitions.map((competition: Competition) => {
            if (competition.hasExpired) {
              return null;
            }

            return (
              <CompetitionCard key={competition.id} competition={competition} />
            );
          })}
        </section>
        <section className="gc-cards gc-competition-cards__placeholders">
          {Array.from({ length: placeholderCount }).map((_, index) => (
            <div className="gc-card" key={index}>
              <CompetitionCardPlaceholder />
            </div>
          ))}
        </section>
      </div>
    </section>
  </div>
);

export default CurrentCompetitions;
