import * as React from 'react';
import { Competition } from 'src/types';
import Carousel from '@components/Carousel';

import FeaturedCard from '../FeaturedCard';

export interface Props {
  competitions: Competition[];
  placeholderCount: number;
  isLoading: boolean;
}

const FeaturedCompetitions: React.SFC<Props> = ({ competitions }) => (
  <section className="gc-featured-competitions">
    {competitions.length > 0 ? (
      <Carousel showIndicators={competitions.length > 1}>
        {competitions.map((competition: Competition) => {
          return (
            <FeaturedCard key={competition.id} competition={competition} />
          );
        })}
      </Carousel>
    ) : null}
  </section>
);

export default FeaturedCompetitions;
