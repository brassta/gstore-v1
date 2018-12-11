import { Donation } from 'src/types';

export interface State {
  donateInProgress: boolean;
  donateSuccess: boolean;
  donateError: boolean;
  donation: Donation | null;
}

const initialState: State = {
  donateInProgress: false,
  donateSuccess: false,
  donateError: false,
  donation: null,
};

export default initialState;
