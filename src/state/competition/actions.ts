import { Competition, Player, Ranking, Reward } from 'src/types';

export enum ActionTypes {
  FetchCurrentCompetitions = '[Competition] Fetch Current Competitions',
  FetchCurrentCompetitionsSuccess = '[Competition] Fetch Current Competitions Success',
  FetchCurrentCompetitionsError = '[Competition] Fetch Current Competitions Error',
  FetchPastCompetitions = '[Competition] Fetch Past Competitions',
  FetchPastCompetitionsSuccess = '[Competition] Fetch Past Competitions Success',
  FetchPastCompetitionsError = '[Competition] Fetch Past Competitions Error',
  FetchRewards = '[Competition] Fetch Rewards',
  FetchRewardsSuccess = '[Competition] Fetch Rewards Success',
  FetchRewardsError = '[Competition] Fetch Rewards Error',
  FetchParticipants = '[Competition] Fetch Participants',
  FetchParticipantsSuccess = '[Competition] Fetch Participants Success',
  FetchParticipantsError = '[Competition] Fetch Participants Error',
  FetchRankings = '[Competition] Fetch Rankings',
  FetchRankingsSuccess = '[Competition] Fetch Rankings Success',
  FetchRankingsError = '[Competition] Fetch Rankings Error',
  JoinCompetition = '[Competition] Join',
  JoinCompetitionSuccess = '[Competition] Join Success',
  JoinCompetitionError = '[Competition] Join Error',
  FetchCompetition = '[Competition] Fetch Details',
  FetchCompetitionSuccess = '[Competition] Fetch Details Success',
  FetchCompetitionError = '[Competition] Fetch Details Error',
  ClearJoinCompetitionState = '[Competition] Clear Join State',
  CompetitionTimeFinish = '[Competition] Competition Time Finish',
  ClaimReward = '[Competition] Claim Reward',
  FetchOwnedReward = '[Competition] Fetch Owned Reward',
  ClaimRewardSuccess = '[Competition] Claim Reward Success',
  ClaimRewardError = '[Competition] Claim Reward Error',
  ClearClaimRewardState = '[Competition] Clear Claim Reward State',
  CompetitionLoading = '[Competition] Competition Loading',
}

export interface ActionMap {
  [ActionTypes.FetchCurrentCompetitions]: {};
  [ActionTypes.FetchCurrentCompetitionsSuccess]: { [id: string]: Competition };
  [ActionTypes.FetchCurrentCompetitionsError]: {};
  [ActionTypes.FetchPastCompetitions]: {};
  [ActionTypes.FetchPastCompetitionsSuccess]: Competition[];
  [ActionTypes.FetchPastCompetitionsError]: {};
  [ActionTypes.FetchRewards]: {};
  [ActionTypes.FetchRewardsSuccess]: Reward[];
  [ActionTypes.FetchRewardsError]: {};
  [ActionTypes.FetchParticipants]: { competitionId: number };
  [ActionTypes.FetchParticipantsSuccess]: Player[];
  [ActionTypes.FetchParticipantsError]: {};
  [ActionTypes.FetchRankings]: { competitionId: number };
  [ActionTypes.FetchRankingsSuccess]: Ranking[];
  [ActionTypes.FetchRankingsError]: {};
  [ActionTypes.FetchCompetition]: { competitionId: string };
  [ActionTypes.FetchCompetitionSuccess]: Competition;
  [ActionTypes.FetchCompetitionError]: {};
  [ActionTypes.JoinCompetition]: { competitionId: number };
  [ActionTypes.JoinCompetitionSuccess]: {};
  [ActionTypes.JoinCompetitionError]: {};
  [ActionTypes.ClearJoinCompetitionState]: {};
  [ActionTypes.CompetitionTimeFinish]: string;
  [ActionTypes.ClaimReward]: {
    competitionId: string;
    mgoAddress: string;
    claimId: string;
  };
  [ActionTypes.FetchOwnedReward]: {
    competitionId: number;
    claimId: number;
    amount: number;
    currency: string;
  };
  [ActionTypes.ClaimRewardSuccess]: {};
  [ActionTypes.ClaimRewardError]: {};
  [ActionTypes.ClearClaimRewardState]: {};
  [ActionTypes.CompetitionLoading]: {};
}
