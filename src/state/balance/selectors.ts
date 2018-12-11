import { State } from './state';

export const getGoldBalance = (balance: State) => balance.goldBalance;
export const getGoldAccountId = (balance: State) => balance.goldAccountId;
export const isGoldBalanceInProgress = (balance: State) =>
  balance.goldBalanceInProgress;
