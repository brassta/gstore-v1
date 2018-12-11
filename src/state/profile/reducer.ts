import { createReducer } from 'src/utilities/redux';

import { ActionMap, ActionTypes } from './actions';
import { State, initialState } from './state';

export default createReducer<State, ActionMap>(
  {
    [ActionTypes.FetchUserProfile]: (state): State => ({
      ...state,
      profileInProgress: true,
    }),
    [ActionTypes.FetchUserProfileSuccess]: (state, payload): State => ({
      ...state,
      ...payload,
      profileInProgress: false,
    }),
    [ActionTypes.FetchUserProfileError]: (state): State => ({
      ...state,
      profileInProgress: false,
    }),
    [ActionTypes.UploadImage]: (state): State => ({
      ...state,
      uploadImageInProgress: true,
    }),
    [ActionTypes.UploadImageSuccess]: (state): State => ({
      ...state,
      uploadImageInProgress: false,
    }),
    [ActionTypes.UploadImageError]: (state): State => ({
      ...state,
      uploadImageInProgress: false,
    }),
  },
  initialState
);
