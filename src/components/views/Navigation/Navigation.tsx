import * as React from 'react';
import { History, Location } from 'history';
import classNames from 'classnames';

import {
  getTabState,
  getOpenTabIdsFromRoute,
  NavigationTab,
} from 'src/constants/navigation';

const baseClass = 'gc-navigation';
const navigationItemClass = `${baseClass}__item`;

export interface Props {
  location: Location;
  history: History;
}

interface State {
  openTabIds: string[];
}

class Navigation extends React.PureComponent<Props, State> {
  state: State = {
    openTabIds: getOpenTabIdsFromRoute(this.props.location.pathname),
  };

  handleSelectTab = (tab: NavigationTab) => {
    const { history } = this.props;

    history.push(tab.route);
  };

  handleExpandTab = (tab: NavigationTab, e: React.MouseEvent) => {
    if (tab.isOpen) {
      this.setState({
        openTabIds: this.state.openTabIds.filter(x => x !== tab.id),
      });
    } else {
      this.setState({
        openTabIds: [...this.state.openTabIds, tab.id],
      });
    }

    e.stopPropagation();
  };

  renderTabState = (navigationTabState: NavigationTab[]): JSX.Element[] => {
    return navigationTabState.map(tab => {
      const classes = classNames(
        navigationItemClass,
        tab.isMain && `${navigationItemClass}--main`,
        tab.isSelected && `${navigationItemClass}--selected`
      );

      return (
        <React.Fragment key={tab.route}>
          <li
            onClick={this.handleSelectTab.bind(this, tab)}
            aria-expanded={tab.isOpen}
            className={classes}>
            {tab.displayName}
          </li>
          {tab.children &&
            tab.isOpen && (
              <li className={`${baseClass}__submenu`}>
                <menu className={`${baseClass}__menu`}>
                  {this.renderTabState(tab.children)}
                </menu>
              </li>
            )}
        </React.Fragment>
      );
    });
  };

  render() {
    const { location } = this.props;
    const { openTabIds } = this.state;
    const navigationTabState = getTabState(openTabIds, location.pathname);

    return (
      <nav className={baseClass}>
        <menu className={`${baseClass}__menu`}>
          {this.renderTabState(navigationTabState)}
        </menu>
      </nav>
    );
  }
}

export default Navigation;
