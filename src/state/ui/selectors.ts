import { State } from './state';

export const isNavigationSidebarOpen = (ui: State) =>
  ui.isNavigationSidebarOpen;

export const isAccountSettingsPanelOpen = (ui: State) =>
  ui.isAccountSettingsPanelOpen;

export const getModalMetadata = (ui: State) => ui.modalMetadata;
export const isModalOpen = (ui: State) => ui.modalMetadata !== null;
