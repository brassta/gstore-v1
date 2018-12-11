import * as React from 'react';
// @ts-ignore
import ReactCrop, { makeAspectCrop } from 'react-image-crop';
import 'react-image-crop/lib/ReactCrop.scss';

import Button, { ButtonGroup } from '@components/Button';
import Modal from '@components/Modal';
import { ImageService, ImageSize } from 'src/services/image';

export interface OuterProps {
  aspect: number;
  imageSize: ImageSize;
}

export interface InnerProps {
  handleSetImage: (blob: Blob | null) => void;
  handleCancel: () => void;
  fileTypeErrorDisplayName: string;
  fileSizeErrorDisplayName: string;
  noImageSelectedDisplayName: string;
  uploadActionDisplayName: string;
  setActionDisplayName: string;
  cancelActionDisplayName: string;
}

interface State {
  crop?: any;
  image?: string;
  imageDom?: HTMLImageElement;
  pixelCrop?: any;
  uploadInvalid: boolean;
  uploadInvalidMessage: string;
}

const baseClass = 'gc-upload-image';

const getInitialCrop = (image: HTMLImageElement, aspect: number) => {
  const cropWidthRatio = 0.5;
  const cropHeightRatio = cropWidthRatio / aspect;
  const cropLeftMargin = 0.25;
  const cropTopMargin =
    (1 - (cropHeightRatio * image.width) / image.height) / 2;

  const crop = makeAspectCrop(
    {
      x: cropLeftMargin * 100,
      y: cropTopMargin * 100,
      aspect,
      width: cropWidthRatio * 100,
    },
    image.width / image.height
  );

  const pixelCrop = {
    x: cropLeftMargin * image.width,
    y: cropTopMargin * image.height,
    width: cropWidthRatio * image.width,
    height: cropHeightRatio * image.width,
  };

  return {
    crop,
    pixelCrop,
  };
};

class UploadImage extends React.PureComponent<InnerProps & OuterProps, State> {
  state: State = {
    uploadInvalid: false,
    uploadInvalidMessage: '',
  };

  fileInput = React.createRef<HTMLInputElement>();
  canvas = React.createRef<HTMLCanvasElement>();

  handleCropChange = (crop: any) => {
    this.setState({ crop });
  };

  handleCropComplete = (crop: any, pixelCrop: any) => {
    this.setState({
      crop,
      pixelCrop,
    });
  };

  handleCropImageLoad = (image: HTMLImageElement) => {
    this.setState({
      imageDom: image,
    });
  };

  handleUpload = () => {
    this.fileInput.current!.click();
  };

  handleSet = async () => {
    const { handleSetImage, imageSize } = this.props;
    const { imageDom, pixelCrop } = this.state;

    const croppedImage = ImageService.getCroppedImage(imageDom!, pixelCrop);
    const resizedImage = await ImageService.resizeImage(
      croppedImage,
      imageSize
    );

    resizedImage.toBlob(
      blob => {
        handleSetImage(blob);
      },
      'image/jpeg',
      0.95
    );
  };

  handleImageLoad: React.ChangeEventHandler<HTMLInputElement> = e => {
    const {
      aspect,
      fileSizeErrorDisplayName,
      fileTypeErrorDisplayName,
    } = this.props;

    const file = e.target!.files![0];
    const reader = new FileReader();

    reader.onload = event => {
      this.setState({
        image: event.target!.result,
      });

      // load image for accessing width & height
      const img = new Image();

      img.onload = () => {
        const initialCrop = getInitialCrop(img, aspect);

        this.handleCropComplete(initialCrop.crop, initialCrop.pixelCrop);
      };

      img.src = event.target!.result;
    };

    if (file) {
      const typeAllowed =
        file.type === 'image/png' || file.type === 'image/jpeg';
      const sizeAllowed = file.size < 3000000;

      if (typeAllowed && sizeAllowed) {
        reader.readAsDataURL(file);
      } else {
        const uploadInvalidMessage = !typeAllowed
          ? fileTypeErrorDisplayName
          : fileSizeErrorDisplayName;

        // show the error message for 2 seconds
        this.setState(
          {
            uploadInvalid: true,
            uploadInvalidMessage,
          },
          () =>
            setTimeout(
              () =>
                this.setState({
                  uploadInvalidMessage: '',
                  uploadInvalid: false,
                }),
              2000
            )
        );
      }
    }
  };

  render() {
    const {
      handleCancel,
      setActionDisplayName,
      cancelActionDisplayName,
      uploadActionDisplayName,
      noImageSelectedDisplayName,
    } = this.props;
    const { crop, image, uploadInvalidMessage } = this.state;

    return (
      <React.Fragment>
        <div className={baseClass}>
          {!image && (
            <p className={`${baseClass}__no-image`}>
              {noImageSelectedDisplayName}
            </p>
          )}
          {image && (
            <div className={`${baseClass}__image`}>
              <ReactCrop
                crop={crop}
                src={image}
                onChange={this.handleCropChange}
                onComplete={this.handleCropComplete}
                onImageLoaded={this.handleCropImageLoad}
              />
            </div>
          )}
          <input
            accept="image/x-png,image/jpeg"
            type="file"
            ref={this.fileInput}
            style={{ display: 'none' }}
            onChange={this.handleImageLoad}
          />
        </div>
        <Modal.Footer align="right" className={`${baseClass}__footer`}>
          <div className={`${baseClass}__invalid-message gc-text--error`}>
            {uploadInvalidMessage}
          </div>
          <ButtonGroup type="separate" size="medium" align="right">
            <Button onClick={handleCancel}>{cancelActionDisplayName}</Button>
            <Button type="secondary" onClick={this.handleUpload}>
              {uploadActionDisplayName}
            </Button>
            <Button type="primary" onClick={this.handleSet}>
              {setActionDisplayName}
            </Button>
          </ButtonGroup>
        </Modal.Footer>
      </React.Fragment>
    );
  }
}
export default UploadImage;
