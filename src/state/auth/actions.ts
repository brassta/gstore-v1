export enum ActionTypes {
  Logout = '[Auth] Logout',
  SetLocale = '[Auth] Set Locale',
}

export interface ActionMap {
  [ActionTypes.Logout]: {};
  [ActionTypes.SetLocale]: string;
}
