import { State } from './state';

export const getUserProfile = (profile: State) => profile;
export const isUserProfileInProgress = (profile: State) =>
  profile.profileInProgress;
export const isUploadImageInProgress = (profile: State) =>
  profile.uploadImageInProgress;
