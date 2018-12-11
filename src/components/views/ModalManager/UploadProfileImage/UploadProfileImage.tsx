import * as React from 'react';

import { profileImageSize, profileImageAspect } from 'src/constants/profile';

import UploadImage from '../UploadImage';

const UploadProfileImage: React.SFC = () => (
  <UploadImage imageSize={profileImageSize} aspect={profileImageAspect} />
);

export default UploadProfileImage;
