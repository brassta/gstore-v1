export interface State {
  goldBalanceInProgress: boolean;
  goldBalance: number | null;
  goldAccountId: string | null;
}

export const initialState: State = {
  goldBalanceInProgress: false,
  goldBalance: null,
  goldAccountId: null,
};
