import Pica from 'pica';

export interface ImageSize {
  width: number;
  height: number;
}

class ImageService {
  pica = new Pica();

  /**
   * @param  {string} imageSrc - base64 encoded image | url
   * @param  {ImageSize} imageSize - height and width in pixels
   * @returns Promise<HTMLCanvasElement> - resized canvas image
   */
  resizeImage(
    imageSrc: string,
    imageSize: ImageSize
  ): Promise<HTMLCanvasElement> {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement('canvas');
      const img = new Image();

      img.onload = () => {
        canvas.width = imageSize.width;
        canvas.height = imageSize.height;

        const result = this.pica.resize(img, canvas, {
          quality: 3,
          unsharpAmount: 0,
          unsharpRadius: 0.5,
          unsharpThreshold: 0,
        });

        resolve(result);
      };

      img.src = imageSrc;
    });
  }

  /**
   * @param  {HTMLImageElement} image - Image dom element
   * @param  {any} pixelCrop - pixelCrop Object provided by react-image-crop
   * @returns string - returns a base64 encoded image
   */
  getCroppedImage(image: HTMLImageElement, pixelCrop: any): string {
    const canvas = document.createElement('canvas');
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    );

    return canvas.toDataURL('image/jpeg');
  }
}

export default new ImageService();
