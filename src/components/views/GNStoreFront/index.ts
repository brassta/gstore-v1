import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';


import GNStoreFront from './GNStoreFront';
import { State } from 'src/state/state';

import messages from './messages';
import {Props} from "@views/GNStoreFront/GNStoreFront";
import {injectIntl} from "react-intl";

const actions = {};

const mapStateToProps = (state: State) => ({});

export default compose<Props, {}>(
    injectIntl,
    connect(
        mapStateToProps,
        actions
    ),
    withProps(({ intl: { formatMessage } }) => ({
        allProductsDisplayName:formatMessage(messages.allProducts),
        gamesDisplayName:formatMessage(messages.games),
        subscriptionsDisplayName:formatMessage(messages.subscriptions),
        giftCardsDisplayName:formatMessage(messages.giftCards),
        pointsDisplayName:formatMessage(messages.points),
        dlcDisplayName:formatMessage(messages.dlc),
        gamingSoftwareDisplayName:formatMessage(messages.gamingSoftware)
    }))
)(GNStoreFront);