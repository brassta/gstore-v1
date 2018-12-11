import * as React from 'react';

import Anchor from '@components/Anchor';
import { ButtonGroup } from '@components/Button';
import LogoSVG from '@images/logo-gshare.svg';
import DownloadPNG from '@images/gshare-download.png';

import {
  GHSARE_WINDOWS_URL,
  GHSARE_LINUX_URL,
  GHSARE_MACOS_URL,
} from 'src/constants';

export interface Props {
  headerTitleDisplayName: string;
  gshareTextDisplayName: string;
  footerTitleDisplayName: string;
  downloadTextDisplayName: string;
  windowsTextDisplayName: string;
  linuxTextDisplayName: string;
  macosTextDisplayName: string;
}

const baseClass = 'gc-gshare';

const GShare: React.SFC<Props> = ({
  headerTitleDisplayName,
  gshareTextDisplayName,
  footerTitleDisplayName,
  downloadTextDisplayName,
  windowsTextDisplayName,
  linuxTextDisplayName,
  macosTextDisplayName,
}) => {
  return (
    <div className={baseClass}>
      <div className={`${baseClass}-content`}>
        <header className={`${baseClass}-section`}>
          <LogoSVG className={`${baseClass}__logo`} />

          {/*<h1 className={`${baseClass}__title`}>{headerTitleDisplayName}</h1>*/}
          {/*<p className={`${baseClass}__text`}>{gshareTextDisplayName}</p>*/}
        </header>

        <figure className={`${baseClass}__image`}>
          <img src={DownloadPNG} />
        </figure>

        <footer className={`${baseClass}-section`}>
          <h1 className={`${baseClass}__title`}>{footerTitleDisplayName}</h1>

          <p className={`${baseClass}__text`}>{downloadTextDisplayName}</p>

          <ButtonGroup
            type="separate"
            size="large"
            className={`${baseClass}-download`}>
            <Anchor
              type="button"
              href={`${GHSARE_WINDOWS_URL}`}
              className="gc-button--secondary gc-button--fixed">
              {windowsTextDisplayName}
            </Anchor>
            <Anchor
              type="button"
              href={`${GHSARE_LINUX_URL}`}
              className="gc-button--secondary gc-button--fixed">
              {linuxTextDisplayName}
            </Anchor>
            <Anchor
              type="button"
              href={`${GHSARE_MACOS_URL}`}
              className="gc-button--secondary gc-button--fixed">
              {macosTextDisplayName}
            </Anchor>
          </ButtonGroup>
        </footer>
      </div>
    </div>
  );
};

export default GShare;
