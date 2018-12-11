import * as React from 'react';

import Tabs from '@components/Tabs';
import Loader from '@components/Loader';
import { Competition } from 'src/types';
import { competitionDetailsTabKeys, playerJoinStatus } from 'src/constants';

import CompetitionHeader from './CompetitionHeader';
import CompetitionRanking from './CompetitionRanking';
import CompetitionInfo from './CompetitionInfo';
import CompetitionParticipants from './CompetitionParticipants';
import CompetitionRules from './CompetitionRules';
import GameFrame from './GameFrame';

export interface Props {
  competition: Competition;
  rankingDisplayName: string;
  infoDisplayName: string;
  participantsDisplayName: string;
  competitionDetailsRulesDisplayName: string;
  fetchCompetitionInProgress: boolean;
  isPlayable: boolean;
  match: {
    params: { competitionId: string };
  };
  fetchCompetition: () => void;
}

const baseClass = 'gc-competition-details';

// TODO@mqrtins refactor markup
const CompetitionDetails: React.SFC<Props> = ({
  competition,
  rankingDisplayName,
  infoDisplayName,
  participantsDisplayName,
  fetchCompetitionInProgress,
  isPlayable,
  competitionDetailsRulesDisplayName,
}) => {
  return (
    <div className={baseClass}>
      {fetchCompetitionInProgress && <Loader />}

      {!fetchCompetitionInProgress &&
        competition && (
          <React.Fragment>
            <CompetitionHeader {...competition} />
            <div className={`${baseClass}__content`}>
              {isPlayable && (
                <GameFrame gameUrl={competition.gameUrl} id={competition.id} />
              )}
              {competition.playerJoinStatus === playerJoinStatus.JOINED ? (
                <Tabs
                  defaultActiveKey={
                    competition.isOngoing
                      ? competitionDetailsTabKeys.RANKING
                      : competitionDetailsTabKeys.PARTICIPANTS
                  }
                  className={`${baseClass}__tabs`}
                  id="competition-details-tab">
                  <Tabs.List>
                    {competition.isOngoing ? (
                      <Tabs.Item eventKey={competitionDetailsTabKeys.RANKING}>
                        {rankingDisplayName}
                      </Tabs.Item>
                    ) : (
                      <Tabs.Item
                        eventKey={competitionDetailsTabKeys.PARTICIPANTS}>
                        {participantsDisplayName}
                      </Tabs.Item>
                    )}
                    <Tabs.Item eventKey={competitionDetailsTabKeys.PRIZES}>
                      {infoDisplayName}
                    </Tabs.Item>
                    <Tabs.Item eventKey={competitionDetailsTabKeys.RULES}>
                      {competitionDetailsRulesDisplayName}
                    </Tabs.Item>
                  </Tabs.List>
                  <Tabs.Content>
                    {competition.isOngoing ? (
                      <Tabs.Tab eventKey={competitionDetailsTabKeys.RANKING}>
                        <CompetitionRanking {...competition} />
                      </Tabs.Tab>
                    ) : (
                      <Tabs.Tab
                        eventKey={competitionDetailsTabKeys.PARTICIPANTS}>
                        <CompetitionParticipants {...competition} />
                      </Tabs.Tab>
                    )}
                    <Tabs.Tab eventKey={competitionDetailsTabKeys.PRIZES}>
                      <CompetitionInfo {...competition} />
                    </Tabs.Tab>
                    <Tabs.Tab eventKey={competitionDetailsTabKeys.RULES}>
                      <CompetitionRules rules={competition.description} />
                    </Tabs.Tab>
                  </Tabs.Content>
                </Tabs>
              ) : (
                <Tabs
                  defaultActiveKey={competitionDetailsTabKeys.PRIZES}
                  className={`${baseClass}__tabs`}
                  id="competition-details-tab">
                  <Tabs.List>
                    <Tabs.Item eventKey={competitionDetailsTabKeys.PRIZES}>
                      {infoDisplayName}
                    </Tabs.Item>
                    {competition.isOngoing ? (
                      <Tabs.Item eventKey={competitionDetailsTabKeys.RANKING}>
                        {rankingDisplayName}
                      </Tabs.Item>
                    ) : (
                      <Tabs.Item
                        eventKey={competitionDetailsTabKeys.PARTICIPANTS}>
                        {participantsDisplayName}
                      </Tabs.Item>
                    )}
                    <Tabs.Item eventKey={competitionDetailsTabKeys.RULES}>
                      {competitionDetailsRulesDisplayName}
                    </Tabs.Item>
                  </Tabs.List>
                  <Tabs.Content>
                    {competition.isOngoing ? (
                      <Tabs.Tab eventKey={competitionDetailsTabKeys.RANKING}>
                        <CompetitionRanking {...competition} />
                      </Tabs.Tab>
                    ) : (
                      <Tabs.Tab
                        eventKey={competitionDetailsTabKeys.PARTICIPANTS}>
                        <CompetitionParticipants {...competition} />
                      </Tabs.Tab>
                    )}
                    <Tabs.Tab eventKey={competitionDetailsTabKeys.PRIZES}>
                      <CompetitionInfo {...competition} />
                    </Tabs.Tab>
                    <Tabs.Tab eventKey={competitionDetailsTabKeys.RULES}>
                      <CompetitionRules rules={competition.description} />
                    </Tabs.Tab>
                  </Tabs.Content>
                </Tabs>
              )}
            </div>
          </React.Fragment>
        )}
    </div>
  );
};

export default CompetitionDetails;
