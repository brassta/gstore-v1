import * as React from 'react';

import Loader from '@components/Loader/Loader';
import { Player } from 'src/types';

import EmptyMatch from '../EmptyMatch';
import Participant from './Participant';
import RefreshCompetition from '../RefreshCompetition';

export interface Props {
  participants: Player[];
  inProgress: boolean;
  handleRefresh: React.MouseEventHandler;
  id: number;
  hasExpired: boolean;
}

const baseClass = 'gc-competition-participants';

const CompetitionParticipants: React.SFC<Props> = ({
  participants,
  inProgress,
  handleRefresh,
  hasExpired,
}) => (
  <div className={baseClass}>
    {!hasExpired && (
      <RefreshCompetition
        isRefreshInProgress={inProgress}
        handleRefresh={handleRefresh}
      />
    )}
    <div className={`${baseClass}__list`}>
      {participants.length > 0 &&
        !inProgress &&
        participants.map(participant => (
          <Participant key={participant.id} {...participant} />
        ))}
      {participants.length === 0 && !inProgress && <EmptyMatch />}
      {inProgress && <Loader />}
    </div>
  </div>
);

export default CompetitionParticipants;
