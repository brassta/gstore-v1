import * as React from 'react';
import Button from '@components/Button';

import svgMenu from '@images/icon-menu.svg';

interface Props {
  handleToggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const baseClass = 'gc-navigation-toggle';

const NavigationToggle: React.SFC<Props> = ({
  handleToggleSidebar,
  isSidebarOpen,
}) => (
  <Button
    aria-controls="gnorg-sidebar"
    type="ghost"
    icon={svgMenu}
    className={baseClass}
    onClick={handleToggleSidebar}>
    Menu
  </Button>
);

export default NavigationToggle;
