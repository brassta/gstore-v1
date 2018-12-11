import { Profile } from 'src/types';

export enum ActionTypes {
  FetchUserProfile = '[Profile] Fetch User Profile',
  FetchUserProfileSuccess = '[Profile] Fetch User Profile Success',
  FetchUserProfileError = '[Profile] Fetch User Profile Error',
  UploadImage = '[Profile] Upload Image',
  UploadImageSuccess = '[Profile] Upload Image Success',
  UploadImageError = '[Profile] Upload Image Error',
}

export interface ActionMap {
  [ActionTypes.FetchUserProfile]: {};
  [ActionTypes.FetchUserProfileSuccess]: Profile;
  [ActionTypes.FetchUserProfileError]: {};
  [ActionTypes.UploadImage]: Blob;
  [ActionTypes.UploadImageSuccess]: {};
  [ActionTypes.UploadImageError]: {};
}
