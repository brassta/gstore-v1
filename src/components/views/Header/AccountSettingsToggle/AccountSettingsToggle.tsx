import * as React from 'react';

import Avatar from '@components/Avatar';
import Dropdown from '@components/Dropdown';

import {Profile} from 'src/types';

export interface Props {
    profile: Profile;
    handleAccountProfileClick: React.MouseEventHandler;
    handleAccountSettingsClick: React.MouseEventHandler;
    handleLogoutClick: React.MouseEventHandler;
    isAccountSettingsPanelOpen: boolean;
    profileDisplayName: string;
    logoutDisplayName: string;
    settingsDisplayName: string;
}


const baseClass = 'gc-account-settings-toggle';

const NavigationToggle: React.SFC<Props> = ({
                                                profile: {avatarImage},
                                                handleAccountProfileClick,
                                                handleAccountSettingsClick,
                                                handleLogoutClick,
                                                profileDisplayName,
                                                logoutDisplayName,
                                            }) => {
    return (
        
        <Dropdown
            noCaret
            type="icon"
            align="right"
            title={<Avatar src={avatarImage} size="small"/>}
            className={baseClass}
            onChange={item => item && item.handleClick()}
            options={[
                {
                    id: 'profile',
                    text: profileDisplayName,
                    item: {handleClick: handleAccountProfileClick},
                },
                {divider: true},
                {
                    id: 'logout',
                    text: logoutDisplayName,
                    item: {handleClick: handleLogoutClick},
                },
            ]}
        />)
};

export default NavigationToggle;
