import { createReducer } from 'src/utilities/redux';

import { playerJoinStatus } from 'src/constants';

import { ActionMap, ActionTypes } from './actions';
import { State, initialState } from './state';

export default createReducer<State, ActionMap>(
  {
    [ActionTypes.FetchCurrentCompetitions]: (state): State => ({
      ...state,
      currentCompetitionsInProgress: true,
    }),
    [ActionTypes.FetchCurrentCompetitionsSuccess]: (state, payload): State => ({
      ...state,
      currentCompetitionsInProgress: false,
      currentCompetitions: payload,
    }),
    [ActionTypes.FetchCurrentCompetitionsError]: (state): State => ({
      ...state,
      currentCompetitionsInProgress: false,
    }),
    [ActionTypes.FetchPastCompetitions]: (state): State => ({
      ...state,
      pastCompetitionsInProgress: true,
    }),
    [ActionTypes.FetchPastCompetitionsSuccess]: (state, payload): State => ({
      ...state,
      pastCompetitionsInProgress: false,
      pastCompetitions: payload,
    }),
    [ActionTypes.FetchPastCompetitionsError]: (state): State => ({
      ...state,
      pastCompetitionsInProgress: false,
    }),
    [ActionTypes.FetchRewards]: (state): State => ({
      ...state,
      rewardsInProgress: true,
    }),
    [ActionTypes.FetchRewardsSuccess]: (state, payload): State => ({
      ...state,
      rewardsInProgress: false,
      rewards: payload,
    }),
    [ActionTypes.FetchRewardsError]: (state): State => ({
      ...state,
      rewardsInProgress: false,
    }),
    [ActionTypes.FetchParticipants]: (state): State => ({
      ...state,
      participantsInProgress: true,
    }),
    [ActionTypes.FetchParticipantsSuccess]: (state, payload): State => ({
      ...state,
      participantsInProgress: false,
      participants: payload,
    }),
    [ActionTypes.FetchParticipantsError]: (state): State => ({
      ...state,
      participantsInProgress: false,
    }),
    [ActionTypes.FetchRankingsSuccess]: (state): State => ({
      ...state,
      rankingsInProgress: true,
    }),
    [ActionTypes.FetchRankingsSuccess]: (state, payload): State => ({
      ...state,
      rankingsInProgress: false,
      rankings: payload,
    }),
    [ActionTypes.FetchRankingsError]: (state): State => ({
      ...state,
      rankingsInProgress: false,
    }),
    [ActionTypes.JoinCompetition]: (state): State => ({
      ...state,
      joinCompetitionInProgress: true,
    }),
    [ActionTypes.JoinCompetitionSuccess]: (state): State => ({
      ...state,
      currentCompetitions: state.selectedCompetitionId
        ? {
            ...state.currentCompetitions,
            [state.selectedCompetitionId]: {
              ...state.currentCompetitions[state.selectedCompetitionId],
              playerJoinStatus: playerJoinStatus.JOINED,
            },
          }
        : state.currentCompetitions,
      joinCompetitionInProgress: false,
    }),
    [ActionTypes.JoinCompetitionError]: (state): State => ({
      ...state,
      joinCompetitionInProgress: false,
      joinCompetitionError: true,
    }),
    [ActionTypes.FetchCompetition]: (state): State => ({
      ...state,
      fetchCompetitionInProgress: true,
    }),
    [ActionTypes.CompetitionLoading]: (state): State => ({
      ...state,
      fetchCompetitionInProgress: true,
    }),
    [ActionTypes.FetchCompetitionSuccess]: (state, payload): State => ({
      ...state,
      selectedCompetitionId: payload.id,
      currentCompetitions: {
        ...state.currentCompetitions,
        [payload.id]: payload,
      },
      fetchCompetitionInProgress: false,
    }),
    [ActionTypes.JoinCompetitionError]: (state): State => ({
      ...state,
      joinCompetitionInProgress: false,
      joinCompetitionError: true,
    }),
    [ActionTypes.ClearJoinCompetitionState]: (state): State => ({
      ...state,
      joinCompetitionInProgress: false,
      joinCompetitionError: false,
    }),
    [ActionTypes.ClearClaimRewardState]: (state): State => ({
      ...state,
      claimRewardError: false,
      claimRewardInProgress: false,
    }),
    [ActionTypes.ClaimReward]: (state): State => ({
      ...state,
      claimRewardInProgress: true,
      claimRewardError: false,
    }),
    [ActionTypes.ClaimRewardSuccess]: (state): State => ({
      ...state,
      claimRewardInProgress: false,
      claimRewardError: false,
    }),
    [ActionTypes.ClaimRewardError]: (state): State => ({
      ...state,
      claimRewardInProgress: false,
      claimRewardError: true,
    }),
  },
  initialState
);
