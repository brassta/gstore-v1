import { createSelector } from 'reselect';

import { State } from './state';
import { playerJoinStatus } from 'src/constants';

export const getCurrentCompetitionsMap = (competition: State) =>
  competition.currentCompetitions;
export const isCurrentCompetitionsInProgress = (competition: State) =>
  competition.currentCompetitionsInProgress;
export const getPastCompetitions = (competition: State) =>
  competition.pastCompetitions;
export const isPastCompetitionsInProgress = (competition: State) =>
  competition.pastCompetitionsInProgress;
export const getRewards = (competition: State) => competition.rewards;
export const isRewardsInProgress = (competition: State) =>
  competition.rewardsInProgress;
export const getSelectedCompetitionId = (competition: State) =>
  competition.selectedCompetitionId;
export const getParticipants = (competition: State) => competition.participants;
export const isParticipantsInProgress = (competition: State) =>
  competition.participantsInProgress;
export const isFetchCompetitionInProgress = (competition: State) =>
  competition.fetchCompetitionInProgress;
export const isJoinCompetitionInProgress = (competition: State) =>
  competition.joinCompetitionInProgress;
export const isJoinCompetitionError = (competition: State) =>
  competition.joinCompetitionError;
export const isClaimRewardInProgress = (competition: State) =>
  competition.claimRewardInProgress;
export const isClaimRewardError = (competition: State) =>
  competition.claimRewardError;

export const getCurrentCompetitions = createSelector(
  getCurrentCompetitionsMap,
  competitionsMap => Object.values(competitionsMap)
);

export const getCurrentFeaturedCompetitions = createSelector(
  getCurrentCompetitionsMap,
  competitionsMap =>
    Object.values(competitionsMap).filter(competition => competition.featured)
);

export const getCurrentNonFeaturedCompetitions = createSelector(
  getCurrentCompetitionsMap,
  competitionsMap =>
    Object.values(competitionsMap).filter(competition => !competition.featured)
);

export const getSelectedCompetition = createSelector(
  getSelectedCompetitionId,
  getCurrentCompetitionsMap,
  (id, competitionsMap) => (id ? competitionsMap[id] : null)
);

export const getSelectedCompetitionPrizes = createSelector(
  getSelectedCompetition,
  competition => (competition ? competition.prizes : null)
);

export const hasUserJoined = createSelector(
  getSelectedCompetition,
  competition =>
    competition && competition.playerJoinStatus === playerJoinStatus.JOINED
);

export const isGamePlayable = createSelector(
  getSelectedCompetition,
  hasUserJoined,
  (competition, hasJoined) => competition && competition.isOngoing && hasJoined
);
