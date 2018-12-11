import { ModalMetadata } from 'src/types';

export interface State {
  isNavigationSidebarOpen: boolean;
  isAccountSettingsPanelOpen: boolean;
  modalMetadata: ModalMetadata | null;
}

export const initialState: State = {
  isNavigationSidebarOpen: false,
  isAccountSettingsPanelOpen: false,
  modalMetadata: null,
};
