import { defineMessages, Messages, FormattedMessage } from 'react-intl';

interface CustomMessages extends Messages {
  uploadImageUpload: FormattedMessage.MessageDescriptor;
  uploadImageSet: FormattedMessage.MessageDescriptor;
  uploadImageCancel: FormattedMessage.MessageDescriptor;
  uploadImageFileTypeError: FormattedMessage.MessageDescriptor;
  uploadImageFileSizeError: FormattedMessage.MessageDescriptor;
  uploadImageNoImageSelected: FormattedMessage.MessageDescriptor;
}

export default defineMessages<CustomMessages>({
  uploadImageUpload: {
    defaultMessage: 'Upload',
    id: 'uploadImageUpload',
  },
  uploadImageSet: {
    defaultMessage: 'Set',
    id: 'uploadImageSet',
  },
  uploadImageCancel: {
    defaultMessage: 'Cancel',
    id: 'uploadImageCancel',
  },
  uploadImageFileTypeError: {
    defaultMessage: 'You must select an image file.',
    id: 'uploadImageFileTypeError',
  },
  uploadImageFileSizeError: {
    defaultMessage: 'Image size should be less than 3MB.',
    id: 'uploadImageFileSizeError',
  },
  uploadImageNoImageSelected: {
    defaultMessage: 'No image selected',
    id: 'uploadImageNoImageSelected',
  },
});
