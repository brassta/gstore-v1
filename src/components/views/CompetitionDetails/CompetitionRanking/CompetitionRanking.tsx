import * as React from 'react';
// @ts-ignore
import jwtDecode from 'jwt-decode';

import IconUser from '@images/profile_avatar_placeholder.png';
import Icon from '@components/Icon/Icon';
import Amount from '@components/Amount';
import Table from '@components/Table/Table';
import { Ranking } from 'src/types';
import http from 'src/services/http';
import cookie from 'src/services/cookie';
import { AUTH_COOKIE } from 'src/constants';
import { mapResponseToRanking } from 'src/utilities/mapper';

import EmptyMatch from '../EmptyMatch';
import RefreshCompetition from '@views/CompetitionDetails/RefreshCompetition';

export interface Props {
  id: number;
  playerColumnDisplayName: string;
  scoreColumnDisplayName: string;
  rewardColumnDisplayName: string;
}

interface State {
  rankings: Ranking[];
  inProgress: boolean;
  totalPages: number;
  page: number;
  playerRanking?: Ranking;
  playerRowNumber: any;
}

const baseClass = 'gc-competition-ranking';
const baseClassUserRow = 'gc-table';

const PAGE_SIZE = 8;

class CompetitionRanking extends React.PureComponent<Props, State> {
  state = {
    totalPages: -1,
    inProgress: false,
    rankings: [],
    page: 0,
    playerRowNumber: -1,
  };

  componentDidMount() {
    this.handleRefresh();
  }

  handleRefresh = () => {
    this.fetchRankings({ pageSize: PAGE_SIZE, page: this.state.page });
  };

  fetchRankings = async (state: any) => {
    const { id } = this.props;

    this.setState({
      inProgress: true,
    });

    try {
      const authData = cookie.getJSON(AUTH_COOKIE);

      const { gnation_id: playerId } = jwtDecode(authData.accessToken);

      const [{ content, totalPages }, [playerRanking]]: any = await Promise.all(
        [
          http.get(`/competitions/${id}/rankings`, {
            page: state.page,
            size: state.pageSize,
          }),
          http.get(`/players/${playerId}/rankings`, { competitionId: id }),
        ]
      );

      let rankingsResponse = content;
      // Add current player ranking to the list's tail
      // if the current player isn't present in rankings list
      if (
        playerRanking &&
        !content.find((r: any) => r.gnationId === playerRanking.gnationId)
      ) {
        rankingsResponse = [...rankingsResponse, playerRanking];
      }

      const playerRN = rankingsResponse.findIndex(
        (element: any) => element.gnationId === playerRanking.gnationId
      );

      this.setState({
        rankings: rankingsResponse.map(mapResponseToRanking),
        inProgress: false,
        totalPages,
        page: state.page,
        playerRowNumber: playerRN,
      });
    } catch (err) {
      this.setState({
        inProgress: false,
      });
    }
  };

  render() {
    const {
      playerColumnDisplayName,
      scoreColumnDisplayName,
      rewardColumnDisplayName,
    } = this.props;

    const { rankings, inProgress, totalPages, playerRowNumber } = this.state;

    const columns = [
      {
        Header: playerColumnDisplayName,
        accessor: 'playerName',
        Cell: (row: any) => {
          return (
            <div>
              <span style={{ paddingRight: 20 }}>{row.original.position}.</span>
              <Icon
                className={`${baseClass}__user-icon`}
                size="normal"
                data={IconUser}
                spacing="right"
              />
              <span>{row.value}</span>
            </div>
          );
        },
      },
      {
        Header: scoreColumnDisplayName,
        accessor: 'score',
        maxWidth: 150,
      },
      {
        Header: rewardColumnDisplayName,
        accessor: 'reward',
        maxWidth: 100,
        Cell: (row: any) => {
          return (
            <Amount
              value={row.value}
              currency={row.original.currency}
              showIcon={true}
              showCurrency={false}
              align="right"
            />
          );
        },
      },
    ];

    return (
      <div className={baseClass}>
        <RefreshCompetition
          isRefreshInProgress={inProgress}
          handleRefresh={this.handleRefresh}
        />
        <div className={`${baseClass}__content`}>
          {rankings.length !== 0 && (
            <Table
              loading={inProgress}
              manual={true}
              onFetchData={this.fetchRankings}
              pages={totalPages}
              pageSize={PAGE_SIZE}
              showPagination={true}
              data={rankings}
              columns={columns}
              getTrProps={(rowInfo: any, state: any) => {
                return {
                  className:
                    playerRowNumber === state.index
                      ? `${baseClassUserRow}__user-row`
                      : '',
                };
              }}
            />
          )}
          {rankings.length === 0 && <EmptyMatch />}
        </div>
      </div>
    );
  }
}

export default CompetitionRanking;
