import * as React from 'react';
import {compose, withProps, lifecycle} from 'recompose';
import {connect} from 'react-redux';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
// import {
//     LocalStorage,
//     ACCEPTED_TOS,
//     // SEEN_WALKTHROUGH,
// } from 'src/services/localStorage';

import {
    ESPORTS_PAGE,
    COMPETITION_DETAILS_PAGE,
    UI_DEMO_PAGE,
    GSHARE_PAGE,
    // ACCEPT_TOS,
    G2A_ALL_PPRODUCTS_PAGE,
} from 'src/constants/routes';
import {showModal} from 'src/state/actions';
// import {Modals} from 'src/constants';

import Header from '@views/Header';
// import Sidebar from '@views/Sidebar';
import AccountSettings from '@views/AccountSettings';
import ModalManager from '@views/ModalManager';
import LadderCompetitions from './Competitions';
import UIDemo from './UIDemo';
import CompetitionDetails from './CompetitionDetails';
import GNStoreFront from './GNStoreFront';
import GShare from './GShare';
// import AcceptTOS from './AcceptTOS';

interface Props {
    acceptedTOS?: boolean;
    seenWalkthrough: boolean;
    showModal: () => void;
}

const Portal: React.SFC<Props> = ({acceptedTOS}) => {
    return (
        <React.Fragment>
            {/*{!acceptedTOS && <Redirect to={ACCEPT_TOS}/>}*/}
            {/*<Route exact path={ACCEPT_TOS} component={AcceptTOS}/>*/}
            {/*{acceptedTOS && (*/}
                <React.Fragment>
                    {/*<Sidebar />*/}
                    <div className="gc-body">
                        <Header/>
                        <Switch>
                            <Route
                                exact
                                path="/"
                                // component={() => <Redirect to={ESPORTS_PAGE}/>}
                                component={() => <Redirect to={G2A_ALL_PPRODUCTS_PAGE}/>}
                            />
                            <Route path={G2A_ALL_PPRODUCTS_PAGE} component={GNStoreFront}/>
                            <Route path={ESPORTS_PAGE} component={LadderCompetitions}/>
                            <Route
                                path={`${COMPETITION_DETAILS_PAGE}/:competitionId`}
                                component={CompetitionDetails}
                            />
                            <Route path={GSHARE_PAGE} component={GShare}/>
                            <Route path={UI_DEMO_PAGE} component={UIDemo}/>
                        </Switch>
                    </div>
                    <AccountSettings/>
                    <ModalManager/>
                </React.Fragment>
            )}
        </React.Fragment>
    );
};

const actions = {
    showModal,
};

export default compose(
    withRouter,
    connect(
        null,
        actions
    ),
    withProps(() => ({
        // acceptedTOS: Boolean(LocalStorage.get(ACCEPTED_TOS)),
        // seenWalkthrough: Boolean(LocalStorage.get(SEEN_WALKTHROUGH)),
    })),
    lifecycle<any, any>({
        componentDidMount() {
            // const {showModal, seenWalkthrough} = this.props;

            // if (!seenWalkthrough) {
            //     showModal({
            //         hasClose: false,
            //         modalName: Modals.Intro,
            //         sticky: true,
            //     });
            // }
        },
    })
)(Portal);
