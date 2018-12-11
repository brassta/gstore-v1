import { compose, withHandlers, withProps } from 'recompose';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';

import { uploadImage, hideModal } from 'src/state/actions';

import UploadImage, { InnerProps, OuterProps } from './UploadImage';
import messages from './messages';

const mapStateToProps = () => ({});

const actions = {
  uploadImage,
  hideModal,
};

export default compose<InnerProps, OuterProps>(
  injectIntl,
  connect(
    mapStateToProps,
    actions
  ),
  withHandlers({
    handleSetImage: ({ uploadImage }) => (blob: Blob) => {
      uploadImage(blob);
    },
    handleCancel: ({ hideModal }) => () => {
      hideModal();
    },
  }),
  withProps(({ intl: { formatMessage } }) => ({
    setActionDisplayName: formatMessage(messages.uploadImageSet),
    uploadActionDisplayName: formatMessage(messages.uploadImageUpload),
    cancelActionDisplayName: formatMessage(messages.uploadImageCancel),
    fileTypeErrorDisplayName: formatMessage(messages.uploadImageFileTypeError),
    fileSizeErrorDisplayName: formatMessage(messages.uploadImageFileSizeError),
    noImageSelectedDisplayName: formatMessage(
      messages.uploadImageNoImageSelected
    ),
  }))
)(UploadImage);
