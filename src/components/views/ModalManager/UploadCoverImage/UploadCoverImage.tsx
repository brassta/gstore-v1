import * as React from 'react';

import { coverImageSize, coverImageAspect } from 'src/constants/profile';

import UploadImage from '../UploadImage';

const UploadCoverImage: React.SFC = () => (
  <UploadImage imageSize={coverImageSize} aspect={coverImageAspect} />
);

export default UploadCoverImage;
