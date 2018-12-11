import { State } from './state';

export const isDonateInProgress = (donate: State) => donate.donateInProgress;
export const isDonateSuccess = (donate: State) => donate.donateSuccess;
export const isDonateError = (donate: State) => donate.donateError;
export const getDonation = (donate: State) => donate.donation;
