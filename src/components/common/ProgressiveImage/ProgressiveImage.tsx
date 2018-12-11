import * as React from 'react';
import classNames from 'classnames';

interface Props {
  src: string;
  alt?: string;
}

interface State {
  loading: boolean;
  transitioned: boolean;
}

const baseClass = 'gc-progressive-image';

class ProgressiveImage extends React.PureComponent<Props, State> {
  image: HTMLImageElement;

  constructor(props: Props) {
    super(props);

    this.state = {
      loading: true,
      transitioned: false,
    };
  }

  componentDidMount() {
    this.loadImage();
  }

  loadImage = () => {
    const { src } = this.props;
    const image = new Image();

    image.onload = this.onLoad;
    image.onerror = this.onError;
    image.src = src;

    this.image = image;
  };

  onLoad = () => {
    this.setState({
      loading: false,
    });
  };

  onError = () => {
    // TODO@martins display "error" image
  };

  onPlaceholderTransitionEnd = () => {
    this.setState({
      transitioned: true,
    });
  };

  render() {
    const { loading, transitioned } = this.state;
    const { src, alt = '' } = this.props;

    return (
      <figure className={baseClass}>
        {!transitioned && (
          <div
            className={classNames(`${baseClass}__placeholder`, {
              [`${baseClass}__placeholder--loaded`]: !loading,
            })}
            onTransitionEnd={this.onPlaceholderTransitionEnd}
          />
        )}
        <img src={src} alt={alt} />
      </figure>
    );
  }
}

export default ProgressiveImage;
