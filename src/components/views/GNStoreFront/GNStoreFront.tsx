import * as React from 'react';

import Tabs from '@components/Tabs';
import {Competition} from 'src/types';
import {gnStoreFrontTabKeys} from 'src/constants';
import AllProducts from "@views/GNStoreFront/AllProducts/";


export interface Props {
    competitions: Competition[];
    handleTabClick: React.MouseEventHandler;
    allProductsDisplayName: string,
    gamesDisplayName: string,
    subscriptionsDisplayName: string,
    giftCardsDisplayName: string,
    pointsDisplayName: string,
    dlcDisplayName: string,
    gamingSoftwareDisplayName: string,
}

const baseClass = 'gc-esports';

const GNStoreFront: React.SFC<Props> = ({
                                            allProductsDisplayName,
                                            gamesDisplayName,
                                            subscriptionsDisplayName,
                                            giftCardsDisplayName,
                                            pointsDisplayName,
                                            dlcDisplayName,
                                            gamingSoftwareDisplayName
                                        }) => {

    return (

        <Tabs
            defaultActiveKey={gnStoreFrontTabKeys.ALL_PRODUCTS}
            id="gnorg-ladder-gnStoreFront"
            className={baseClass}
        >
            <div>
                <Tabs.List>
                    <Tabs.Item eventKey={gnStoreFrontTabKeys.ALL_PRODUCTS}>{allProductsDisplayName}</Tabs.Item>
                    <Tabs.Item eventKey={gnStoreFrontTabKeys.GAMES}>{gamesDisplayName}</Tabs.Item>
                    <Tabs.Item eventKey={gnStoreFrontTabKeys.SUBSCRIPTIONS}>{subscriptionsDisplayName}</Tabs.Item>
                    <Tabs.Item eventKey={gnStoreFrontTabKeys.GIFT_CARDS}>{giftCardsDisplayName}</Tabs.Item>
                    <Tabs.Item eventKey={gnStoreFrontTabKeys.POINTS}>{pointsDisplayName}</Tabs.Item>
                    <Tabs.Item eventKey={gnStoreFrontTabKeys.GAMING_SOFTWARE}>{gamingSoftwareDisplayName}</Tabs.Item>
                </Tabs.List>
                <Tabs.Content>
                    <Tabs.Tab eventKey={gnStoreFrontTabKeys.ALL_PRODUCTS}><AllProducts/></Tabs.Tab>
                    <Tabs.Tab eventKey={gnStoreFrontTabKeys.GAMES}/>
                    <Tabs.Tab eventKey={gnStoreFrontTabKeys.SUBSCRIPTIONS}/>
                    <Tabs.Tab eventKey={gnStoreFrontTabKeys.GIFT_CARDS}/>
                    <Tabs.Tab eventKey={gnStoreFrontTabKeys.POINTS}/>
                    <Tabs.Tab eventKey={gnStoreFrontTabKeys.GAMING_SOFTWARE}/>

                </Tabs.Content>
            </div>
        </Tabs>)


};

export default GNStoreFront;
