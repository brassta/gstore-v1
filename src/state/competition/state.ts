import { Competition, Player, Ranking, Reward } from 'src/types';

export interface State {
  selectedCompetitionId: string | null;
  currentCompetitions: { [id: string]: Competition };
  currentCompetitionsInProgress: boolean;
  pastCompetitions: Competition[];
  pastCompetitionsInProgress: boolean;
  rewards: Reward[];
  rewardsInProgress: boolean;
  participants: Player[];
  participantsInProgress: boolean;
  rankings: Ranking[];
  rankingsInProgress: boolean;
  joinCompetitionInProgress: boolean;
  joinCompetitionError: boolean;
  fetchCompetitionInProgress: boolean;
  fetchCompetitionError: boolean;
  claimRewardInProgress: boolean;
  claimRewardError: boolean;
}

export const initialState: State = {
  selectedCompetitionId: null,
  currentCompetitions: {},
  currentCompetitionsInProgress: false,
  pastCompetitions: [],
  pastCompetitionsInProgress: false,
  rewards: [],
  rewardsInProgress: false,
  participants: [],
  participantsInProgress: false,
  rankings: [],
  rankingsInProgress: false,
  joinCompetitionInProgress: false,
  joinCompetitionError: false,
  fetchCompetitionInProgress: false,
  fetchCompetitionError: false,
  claimRewardInProgress: false,
  claimRewardError: false,
};
