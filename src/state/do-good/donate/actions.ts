import { Donation } from 'src/types';

export enum ActionTypes {
  Donate = '[Humanitarian Project] Donate',
  DonateSuccess = '[Humanitarian Project] Donate Success',
  DonateError = '[Humanitarian Project] Donate Error',
  ClearDonateState = '[Humanitarian Project] Clear',
}

export interface ActionMap {
  [ActionTypes.Donate]: Donation;
  [ActionTypes.DonateSuccess]: {};
  [ActionTypes.DonateError]: {};
  [ActionTypes.ClearDonateState]: {};
}
