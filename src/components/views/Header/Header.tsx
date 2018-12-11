import * as React from 'react';

import NavigationToggle from './NavigationToggle';
import GNGoldStatus from './GNGoldStatus';
import AccountSettingsToggle from './AccountSettingsToggle';
import {Logo} from "@components/index";
import HeaderToolbarToogle from "./HeaderToolbarToogle";
import BellNotifier from "@views/Header/BellNotifier/BellNotifier";


interface Props {
    isDesktop: boolean;
}

const baseClass = 'gc-header';

const Header: React.SFC<Props> = ({isDesktop}) => (
    <header className={baseClass}>
        {!isDesktop && <NavigationToggle/>}
        <div className={`${baseClass}__actions`}>
            <Logo/>
            <div className="account-wrapper">
                <GNGoldStatus/>
                <HeaderToolbarToogle/>
                <BellNotifier/>
                <AccountSettingsToggle/>
            </div>
        </div>
    </header>
);

export default Header;
