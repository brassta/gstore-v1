import * as routes from './routes';

interface NavigationTabMapItem {
  isMain?: boolean;
  children?: string[];
  route: string;
  id: string;
  displayName: string;
}

export interface NavigationTab {
  isMain?: boolean;
  isSelected?: boolean;
  isOpen?: boolean;
  children?: NavigationTab[];
  route: string;
  id: string;
  displayName: string;
}

export type NavigationTabMap = { [key: string]: NavigationTabMapItem };

const tabIds = {
  uiDemo: 'ui-demo',
  esports: 'esports',
  gshare: 'gshare',
  dashboard: 'dashboard',
  doGood: 'do-good',
  esportsMyCompetitions: 'esports-my-competitions',
  esportsPastCompetitions: 'esports-past-competitions',
  esportsGames: 'esports-games',
};

export const initialState: NavigationTabMap = {
  // [tabIds.dashboard]: {
  //   isMain: true,
  //   route: routes.DASHBOARD_PAGE,
  //   id: tabIds.dashboard,
  //   displayName: 'Dashboard',
  // },
  [tabIds.esports]: {
    isMain: true,
    route: routes.ESPORTS_PAGE,
    children: [
      tabIds.esportsMyCompetitions,
      tabIds.esportsGames,
      tabIds.esportsPastCompetitions,
    ],
    id: tabIds.esports,
    displayName: 'eSports',
  },
  [tabIds.gshare]: {
    isMain: true,
    route: routes.GSHARE_PAGE,
    id: tabIds.gshare,
    displayName: 'GShare',
  },
  // [tabIds.doGood]: {
  //   isMain: true,
  //   route: routes.DO_GOOD_PAGE,
  //   id: tabIds.doGood,
  //   displayName: 'Do Good',
  // },
  // [tabIds.uiDemo]: {
  //   isMain: true,
  //   route: routes.UI_DEMO_PAGE,
  //   id: tabIds.uiDemo,
  //   displayName: 'UI Demo',
  // },
  [tabIds.esportsMyCompetitions]: {
    route: routes.ESPORTS_MY_COMPETITIONS_PAGE,
    id: tabIds.esportsMyCompetitions,
    displayName: 'My Competitions',
  },
  [tabIds.esportsGames]: {
    route: routes.ESPORTS_GAMES_PAGE,
    id: tabIds.esportsGames,
    displayName: 'Games',
  },
  [tabIds.esportsPastCompetitions]: {
    route: routes.ESPORTS_PAST_COMPETITIONS,
    id: tabIds.esportsPastCompetitions,
    displayName: 'Past Competitions',
  },
};

export const getBreadcrumbsFromRoute = (route: string) =>
  Object.values(initialState)
    .filter(tab => route.substring(0, tab.route.length) === tab.route)
    .sort((a, b) => (a.route.length > b.route.length ? 1 : -1));

export const getOpenTabsFromRoute = (route: string) =>
  Object.values(initialState).filter(
    tab =>
      route.substring(0, tab.route.length) === tab.route && tab.route !== route
  );

export const getOpenTabIdsFromRoute = (route: string) =>
  getOpenTabsFromRoute(route).map(tab => tab.id);

const isSelectedTab = (tab: NavigationTabMapItem, currentRoute: string) =>
  tab.route === currentRoute;
const isOpenTab = (tab: NavigationTabMapItem, openTabIds: string[]) =>
  Boolean(openTabIds.find(id => id === tab.id));

export const getTabState = (openTabIds: string[], currentRoute: string) => {
  const mainTabs = Object.values(initialState).filter(tab => tab.isMain);

  const createTree = (tab: NavigationTabMapItem): NavigationTab => {
    return {
      ...(tab.children && {
        children: tab.children
          .map(tabId => initialState[tabId])
          .map(createTree),
      }),
      isSelected: isSelectedTab(tab, currentRoute),
      isOpen: isOpenTab(tab, openTabIds),
      route: tab.route,
      isMain: tab.isMain,
      id: tab.id,
      displayName: tab.displayName,
    };
  };

  return mainTabs.map(createTree);
};

export const ACCOUNTS_URL: string = process.env.GNORG_ACCOUNTS_URL || '';
