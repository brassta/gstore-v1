import * as React from 'react';

import Tabs from '@components/Tabs';
import {Competition} from 'src/types';
import {competitionTabKeys} from 'src/constants';

import CurrentLadder from './CurrentCompetitions';
import MyCompetitions from './MyCompetitions';
import Rewards from './Rewards';
// import ConsoleLogger from '../../../utilities/console';

// import FeaturedCompetitions from './FeaturedCompetitions';

export interface Props {
    competitions: Competition[];
    handleTabClick: React.MouseEventHandler;
    activeTournamentsDisplayName: string;
    myTournamentsDisplayName: string;
    myRewardsDisplayName: string;
}

const baseClass = 'gc-esports';

const Competitions: React.SFC<Props> = ({
                                            handleTabClick,
                                            activeTournamentsDisplayName,
                                            myTournamentsDisplayName,
                                            myRewardsDisplayName,
                                        }) => {
return(


    <Tabs
        defaultActiveKey={competitionTabKeys.CURRENT}
        id="gnorg-ladder-competitions"
        className={baseClass}
    >
        <div>
            {/*<FeaturedCompetitions />*/}
            <Tabs.List>
                <Tabs.Item eventKey={competitionTabKeys.CURRENT}>
                    {activeTournamentsDisplayName}
                </Tabs.Item>
                <Tabs.Item eventKey={competitionTabKeys.PAST}>
                    {myTournamentsDisplayName}
                </Tabs.Item>
                <Tabs.Item eventKey={competitionTabKeys.REWARDS}>
                    {myRewardsDisplayName}
                </Tabs.Item>
            </Tabs.List>
            <Tabs.Content>
                <Tabs.Tab eventKey={competitionTabKeys.CURRENT}>
                    <CurrentLadder/>
                </Tabs.Tab>
                <Tabs.Tab eventKey={competitionTabKeys.PAST}>
                    <MyCompetitions/>
                </Tabs.Tab>
                <Tabs.Tab eventKey={competitionTabKeys.REWARDS}>
                    <Rewards/>
                </Tabs.Tab>
            </Tabs.Content>
        </div>
    </Tabs>)


};

export default Competitions;
