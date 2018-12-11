import * as React from 'react';

import Navigation from '../Navigation';
import Logo from '@components/Logo';
import Button from '@components/Button';
import Footer from '@views/Footer';
import svgClose from '@images/icon-close.svg';

interface Props {
  width?: any;
  isSidebarOpen: boolean;
  isDesktop: boolean;
  handleHide: () => void;
  children: any;
}

const baseClass = 'gc-sidebar';

const Sidebar: React.SFC<Props> = (props: Props) => {
  const { isDesktop, isSidebarOpen, handleHide } = props;

  return (
    <aside
      id="gnorg-sidebar"
      aria-expanded={isSidebarOpen}
      className={baseClass}>
      <header className={`${baseClass}__header`}>
        <Logo size="medium" />
        {isSidebarOpen &&
          !isDesktop && (
            <Button
              icon={svgClose}
              type="ghost"
              size="small"
              onClick={handleHide}
              className={`${baseClass}__close`}>
              Close
            </Button>
          )}
      </header>

      <Navigation />
      <Footer />
    </aside>
  );
};

export default Sidebar;
