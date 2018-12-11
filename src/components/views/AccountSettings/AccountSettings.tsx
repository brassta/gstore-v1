import * as React from 'react';

import Anchor from 'src/components/common/Anchor/index';
import Button from 'src/components/common/Button/index';

export interface Props {
  accountDisplayName: string;
  settingsDisplayName: string;
  logoutDisplayName: string;
  checkBalanceDisplayName: string;
  handleLogoutClick: React.MouseEventHandler;
  handleCheckBalanceClick: React.MouseEventHandler;
  isAccountSettingsPanelOpen: boolean;
}

const baseClass = 'gc-account-settings';
// TODO@martins use Router Links and buttons

const AccountSettings: React.SFC<Props> = ({
  accountDisplayName,
  settingsDisplayName,
  logoutDisplayName,
  checkBalanceDisplayName,
  handleLogoutClick,
  handleCheckBalanceClick,
  isAccountSettingsPanelOpen,
}) => (
  <div
    className={`${baseClass} ${isAccountSettingsPanelOpen ? 'is-open' : ''}`}>
    {isAccountSettingsPanelOpen && (
      <div className={`${baseClass}__panel`}>
        <nav>
          <ul>
            <li>
              <Anchor href="#">{accountDisplayName}</Anchor>
            </li>
            <li className="separator" />
            <li>
              <Button type="link" onClick={handleLogoutClick}>
                {logoutDisplayName}
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    )}
  </div>
);

export default AccountSettings;
