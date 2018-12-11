export enum ActionTypes {
  FetchGoldBalance = '[Balance] Fetch Gold Balance',
  FetchGoldBalanceSuccess = '[Balance] Fetch Gold Balance Success',
  FetchGoldBalanceError = '[Balance] Fetch Gold Balance Error',
}

export interface ActionMap {
  [ActionTypes.FetchGoldBalance]: {};
  [ActionTypes.FetchGoldBalanceSuccess]: {
    availableBalance: number;
    accountId: string;
  };
  [ActionTypes.FetchGoldBalanceError]: {};
}
