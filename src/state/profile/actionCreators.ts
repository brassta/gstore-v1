import { createAction } from 'src/utilities/redux';

import { ActionMap, ActionTypes } from './actions';

export const fetchUserProfile = () =>
  createAction<ActionMap, ActionTypes.FetchUserProfile>(
    ActionTypes.FetchUserProfile
  )({});

export const fetchUserProfileSuccess = createAction<
  ActionMap,
  ActionTypes.FetchUserProfileSuccess
>(ActionTypes.FetchUserProfileSuccess);

export const fetchUserProfileError = () =>
  createAction<ActionMap, ActionTypes.FetchUserProfileError>(
    ActionTypes.FetchUserProfileError
  )({});

export const uploadImage = createAction<ActionMap, ActionTypes.UploadImage>(
  ActionTypes.UploadImage
);

export const uploadImageSuccess = () =>
  createAction<ActionMap, ActionTypes.UploadImageSuccess>(
    ActionTypes.UploadImageSuccess
  )({});

export const uploadImageError = () =>
  createAction<ActionMap, ActionTypes.UploadImageError>(
    ActionTypes.UploadImageError
  )({});
