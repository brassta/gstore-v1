import * as React from 'react';
import classNames from 'classnames';

import { FullscreenApi } from 'src/services/browser';

import Button from '@components/Button/Button';

export interface Props {
  gameUrl: string;
  id: string;
  toggleFullScreenDisplayName: string;
}

type State = {
  isFullScreen: boolean;
};

const baseClass = 'gc-game-frame';

class GameFrame extends React.PureComponent<Props, State> {
  gameRef = React.createRef<HTMLIFrameElement>();
  frameRef = React.createRef<HTMLDivElement>();

  constructor(props: Props) {
    super(props);

    this.state = { isFullScreen: false };
  }

  componentDidMount() {
    FullscreenApi.addFullScreenChangeListener(
      this.frameRef.current!,
      this.handleFullScreenChange
    );

    try {
      window.addEventListener('message', this.postLadderIdMessage);
    } catch (err) {
      // tslint:disable-next-line
      console.error(err);
    }
  }

  postLadderIdMessage = (event: any) => {
    const { id } = this.props;

    if (event.data === 'SDK loaded') {
      this.gameRef.current!.contentWindow!.postMessage(id, '*');
    }
  };

  handleFullScreenChange = () => {
    this.setState({ isFullScreen: FullscreenApi.isFullScreenMode() });
  };

  handleToggleFullScreen = () => {
    if (FullscreenApi.isFullScreenEnabled()) {
      if (FullscreenApi.isFullScreenMode()) {
        FullscreenApi.exitFullScreen();
      } else {
        FullscreenApi.requestFullScreen(this.frameRef.current!);
      }
    }
  };

  componentWillUnmount() {
    FullscreenApi.removeFullScreenChangeListener(
      this.frameRef.current!,
      this.handleFullScreenChange
    );
    window.removeEventListener('message', this.postLadderIdMessage);
  }

  render() {
    const { gameUrl, toggleFullScreenDisplayName } = this.props;
    const classes = classNames(
      baseClass,
      this.state.isFullScreen && `${baseClass}--fullscreen`
    );

    return (
      <div ref={this.frameRef} className={classes}>
        <iframe
          ref={this.gameRef}
          className={`${baseClass}__content`}
          src={gameUrl}
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          allowFullScreen
        />
        <footer className={`${baseClass}__footer`}>
          <Button
            type="ghost"
            className={`${baseClass}__toggle`}
            onClick={this.handleToggleFullScreen}>
            {toggleFullScreenDisplayName}
          </Button>
        </footer>
      </div>
    );
  }
}

export default GameFrame;
