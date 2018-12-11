import { ModalMetadata } from 'src/types';

export enum ActionTypes {
  ShowNavigationSidebar = '[UI] Show Navigation Sidebar',
  HideNavigationSidebar = '[UI] Hide Navigation Sidebar',
  ShowAccountSettings = '[UI] Show Account Settings',
  HideAccountSettings = '[UI] Hide Account Settings',
  ShowModal = '[UI] Show Modal',
  HideModal = '[UI] Hide Modal',
}

export interface ActionMap {
  [ActionTypes.ShowNavigationSidebar]: {};
  [ActionTypes.HideNavigationSidebar]: {};
  [ActionTypes.ShowAccountSettings]: {};
  [ActionTypes.HideAccountSettings]: {};
  [ActionTypes.ShowModal]: ModalMetadata;
  [ActionTypes.HideModal]: {};
}
