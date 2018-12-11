import { all, put, takeLatest, takeEvery, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
// @ts-ignore
import jwtDecode from 'jwt-decode';

import http from 'src/services/http';
import { mapResponseToCompetition } from 'src/utilities/mapper';
import { ActionObject } from 'src/utilities/redux';
import { Player, Ranking, Competition } from 'src/types';
import { hideModal, showModal, fetchGoldBalance } from 'src/state/actions';
import { getCurrentCompetitionsMap } from 'src/state/selectors';
import { Modals, playerJoinStatus } from 'src/constants';
import cookie from 'src/services/cookie';
import { AUTH_COOKIE } from 'src/constants';

import * as actions from './actionCreators';
import * as balanceActions from '../balance/actionCreators';
import { ActionTypes, ActionMap } from './actions';

function* fetchCurrentCompetitions$() {
  try {
    const [
      activeCompetitionsResponse,
      futureCompetitionsResponse,
    ] = yield Promise.all(
      ['active', 'future'].map(status => http.get(`/competitions`, { status }))
    );

    const competitions = [
      ...activeCompetitionsResponse,
      ...futureCompetitionsResponse,
    ].map(mapResponseToCompetition);

    yield put(
      actions.fetchCurrentCompetitionsSuccess(
        competitions.reduce((acc, curr) => ({ ...acc, [curr.id]: curr }), {})
      )
    );
  } catch (e) {
    yield put(actions.fetchCurrentCompetitionsError());
  }
}

function* fetchPastCompetitions$() {
  try {
    const authData = cookie.getJSON(AUTH_COOKIE);
    const { gnation_id: playerId } = jwtDecode(authData.accessToken);

    const data = yield http.get(`/players/${playerId}/rankings`);
    const pastCompetitions = data.map((x: any) => ({
      ...mapResponseToCompetition(x.ladder),
      rank: x.position,
    }));

    yield put(actions.fetchPastCompetitionsSuccess(pastCompetitions));
  } catch (e) {
    yield put(actions.fetchPastCompetitionsError());
  }
}

function* fetchRewards$() {
  try {
    const data = yield http.get(`/players/rewards`);

    yield put(actions.fetchRewardsSuccess(data));
  } catch (e) {
    yield put(actions.fetchRewardsError());
  }
}

function* fetchParticipants$({
  payload: { competitionId },
}: ActionObject<ActionMap, ActionTypes.FetchParticipants>) {
  try {
    const participants: Player[] = yield http.get(
      `/competitions/${competitionId}/players`
    );

    yield put(actions.fetchParticipantsSuccess(participants));
  } catch (e) {
    yield put(actions.fetchParticipantsError());
  }
}

// TODO@djsimovic: remove this if deemed unecessary in future.
function* fetchRankings$({
  payload: { competitionId },
}: ActionObject<ActionMap, ActionTypes.FetchRankings>) {
  try {
    const rankings: Ranking[] = yield http.get(
      `/competitions/${competitionId}/rankings`
    );

    yield put(actions.fetchRankingsSuccess(rankings));
  } catch (e) {
    yield put(actions.fetchRankingsError());
  }
}

function* fetchCompetitionDetails$({
  payload,
}: ActionObject<ActionMap, ActionTypes.FetchCompetition>) {
  try {
    const competitionResponse = yield http.get(
      `/competitions/${payload.competitionId}`
    );

    const competition: Competition = mapResponseToCompetition(
      competitionResponse
    );

    yield put(actions.fetchCompetitionSuccess(competition));
  } catch (err) {
    yield put(actions.fetchCompetitionError());
  }
}

function* joinCompetition$({
  payload,
}: ActionObject<ActionMap, ActionTypes.JoinCompetition>) {
  try {
    yield http.post(`/competitions/${payload.competitionId}/payin`);

    yield put(hideModal());
    yield put(actions.joinCompetitionSuccess());
    yield put(actions.fetchPastCompetitions());
    yield put(balanceActions.fetchGoldBalance());
  } catch (err) {
    yield put(actions.joinCompetitionError());
  }
}

function* competitionTimeFinish$({
  payload: id,
}: ActionObject<ActionMap, ActionTypes.CompetitionTimeFinish>) {
  const competitionsMap = yield select(getCurrentCompetitionsMap);
  const competition = competitionsMap[id];

  if (competition.isOngoing) {
    // competition ended
    yield put(actions.competitionLoading());
    yield put(
      actions.fetchCurrentCompetitionsSuccess({
        ...competitionsMap,
        [id]: {
          ...competition,
          hasExpired: true,
          isOngoing: false,
        },
      })
    );
    yield put(
      actions.fetchCompetitionSuccess({
        ...competition,
        hasExpired: true,
        isOngoing: false,
      })
    );

    if (competition.playerJoinStatus === playerJoinStatus.JOINED) {
      yield fetchCompetitionReward$(competition.id);
    }
  } else {
    // competition started
    yield put(
      actions.fetchCurrentCompetitionsSuccess({
        ...competitionsMap,
        [id]: {
          ...competition,
          isOngoing: true,
        },
      })
    );
  }
}

function* fetchCompetitionReward$(id: number) {
  try {
    const authData = cookie.getJSON(AUTH_COOKIE);
    const { gnation_id: playerId } = jwtDecode(authData.accessToken);

    const ranks = yield http.get(`/players/${playerId}/rankings`, {
      competitionId: id,
    });

    if (ranks.length === 0) {
      return;
    }

    // TODO@martins remove next line when BE issue is fixed
    yield delay(5000);
    const reward = yield http.get(`/competitions/${id}/reward`);

    yield put(
      showModal({
        hasClose: false,
        modalName: Modals.GameFinished,
        data: {
          rank: ranks[0].position,
          amount: reward.amount,
          claimId: reward.claimId,
          currency: reward.currency,
          competitionId: id,
        },
      })
    );
  } catch (err) {
    // tslint:disable-next-line
    console.log(err);
  }
}

function* claimReward$({
  payload: { competitionId, mgoAddress, claimId },
}: ActionObject<ActionMap, ActionTypes.ClaimReward>) {
  try {
    yield http.post(`/competitions/${competitionId}/reward`, {
      ...(mgoAddress ? { mgoAddress } : {}),
      claimId,
    });

    yield put(actions.claimRewardSuccess());
    yield put(actions.clearClaimRewardState());
    yield put(fetchGoldBalance());
    yield put(hideModal());
    yield put(actions.fetchRewards());
  } catch (err) {
    yield put(actions.claimRewardError());
  }
}

export default function*() {
  yield all([
    takeLatest(ActionTypes.FetchCurrentCompetitions, fetchCurrentCompetitions$),
    takeLatest(ActionTypes.FetchPastCompetitions, fetchPastCompetitions$),
    takeLatest(ActionTypes.FetchRewards, fetchRewards$),
    takeLatest(ActionTypes.FetchParticipants, fetchParticipants$),
    takeLatest(ActionTypes.FetchRankings, fetchRankings$),
    takeLatest(ActionTypes.FetchCompetition, fetchCompetitionDetails$),
    takeLatest(ActionTypes.JoinCompetition, joinCompetition$),
    takeEvery(ActionTypes.CompetitionTimeFinish, competitionTimeFinish$),
    takeLatest(ActionTypes.ClaimReward, claimReward$),
  ]);
}
