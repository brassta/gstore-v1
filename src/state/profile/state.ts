export interface State {
  username: string;
  email: string;
  avatarImage: string;
  coverImage: string;
  profileInProgress: boolean;
  uploadImageInProgress: boolean;
}

export const initialState: State = {
  username: '',
  email: '',
  avatarImage: '',
  coverImage: '',
  profileInProgress: false,
  uploadImageInProgress: false,
};
