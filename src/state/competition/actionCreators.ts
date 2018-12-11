import { createAction } from 'src/utilities/redux';

import { ActionMap, ActionTypes } from './actions';

export const fetchCurrentCompetitions = () =>
  createAction<ActionMap, ActionTypes.FetchCurrentCompetitions>(
    ActionTypes.FetchCurrentCompetitions
  )({});

export const fetchCurrentCompetitionsSuccess = createAction<
  ActionMap,
  ActionTypes.FetchCurrentCompetitionsSuccess
>(ActionTypes.FetchCurrentCompetitionsSuccess);

export const fetchCurrentCompetitionsError = () =>
  createAction<ActionMap, ActionTypes.FetchCurrentCompetitionsError>(
    ActionTypes.FetchCurrentCompetitionsError
  )({});

export const fetchPastCompetitions = () =>
  createAction<ActionMap, ActionTypes.FetchPastCompetitions>(
    ActionTypes.FetchPastCompetitions
  )({});

export const fetchPastCompetitionsSuccess = createAction<
  ActionMap,
  ActionTypes.FetchPastCompetitionsSuccess
>(ActionTypes.FetchPastCompetitionsSuccess);

export const fetchPastCompetitionsError = () =>
  createAction<ActionMap, ActionTypes.FetchPastCompetitionsError>(
    ActionTypes.FetchPastCompetitionsError
  )({});

export const fetchRewards = () =>
  createAction<ActionMap, ActionTypes.FetchRewards>(ActionTypes.FetchRewards)(
    {}
  );


export const fetchRewardsSuccess = createAction<
  ActionMap,
  ActionTypes.FetchRewardsSuccess
>(ActionTypes.FetchRewardsSuccess);

export const fetchRewardsError = () =>
  createAction<ActionMap, ActionTypes.FetchRewardsError>(
    ActionTypes.FetchRewardsError
  )({});

export const fetchParticipants = createAction<
  ActionMap,
  ActionTypes.FetchParticipants
>(ActionTypes.FetchParticipants);

export const fetchParticipantsSuccess = createAction<
  ActionMap,
  ActionTypes.FetchParticipantsSuccess
>(ActionTypes.FetchParticipantsSuccess);

export const fetchParticipantsError = () =>
  createAction<ActionMap, ActionTypes.FetchParticipantsError>(
    ActionTypes.FetchParticipantsError
  )({});

export const fetchRankings = createAction<ActionMap, ActionTypes.FetchRankings>(
  ActionTypes.FetchRankings
);

export const fetchRankingsSuccess = createAction<
  ActionMap,
  ActionTypes.FetchRankingsSuccess
>(ActionTypes.FetchRankingsSuccess);

export const fetchRankingsError = () =>
  createAction<ActionMap, ActionTypes.FetchRankingsError>(
    ActionTypes.FetchRankingsError
  )({});

export const joinCompetition = createAction<
  ActionMap,
  ActionTypes.JoinCompetition
>(ActionTypes.JoinCompetition);

export const joinCompetitionSuccess = () =>
  createAction<ActionMap, ActionTypes.JoinCompetitionSuccess>(
    ActionTypes.JoinCompetitionSuccess
  )({});

export const joinCompetitionError = () =>
  createAction<ActionMap, ActionTypes.JoinCompetitionError>(
    ActionTypes.JoinCompetitionError
  )({});

export const clearJoinCompetitionState = () =>
  createAction<ActionMap, ActionTypes.ClearJoinCompetitionState>(
    ActionTypes.ClearJoinCompetitionState
  )({});

export const fetchCompetition = createAction<
  ActionMap,
  ActionTypes.FetchCompetition
>(ActionTypes.FetchCompetition);

export const fetchCompetitionSuccess = createAction<
  ActionMap,
  ActionTypes.FetchCompetitionSuccess
>(ActionTypes.FetchCompetitionSuccess);

export const fetchCompetitionError = () =>
  createAction<ActionMap, ActionTypes.FetchCompetitionError>(
    ActionTypes.FetchCompetitionError
  )({});

export const competitionTimeFinish = createAction<
  ActionMap,
  ActionTypes.CompetitionTimeFinish
>(ActionTypes.CompetitionTimeFinish);

export const fetchOwnedReward = createAction<
  ActionMap,
  ActionTypes.FetchOwnedReward
>(ActionTypes.FetchOwnedReward);

export const claimReward = createAction<ActionMap, ActionTypes.ClaimReward>(
  ActionTypes.ClaimReward
);

export const claimRewardSuccess = () =>
  createAction<ActionMap, ActionTypes.ClaimRewardSuccess>(
    ActionTypes.ClaimRewardSuccess
  )({});

export const claimRewardError = () =>
  createAction<ActionMap, ActionTypes.ClaimRewardError>(
    ActionTypes.ClaimRewardError
  )({});

export const clearClaimRewardState = () =>
  createAction<ActionMap, ActionTypes.ClearClaimRewardState>(
    ActionTypes.ClearClaimRewardState
  )({});

export const competitionLoading = () =>
  createAction<ActionMap, ActionTypes.CompetitionLoading>(
    ActionTypes.CompetitionLoading
  )({});
