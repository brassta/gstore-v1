import * as React from 'react';

import Button from '@components/Button';

export interface Props {
  adDoneDisplayName: string;
  handleDoneButtonClick: () => void;
}

const baseClass = 'gc-ad';

const Ad: React.SFC<Props> = ({ adDoneDisplayName, handleDoneButtonClick }) => (
  <div className={baseClass}>
    {/*Temporarily commented-out because prettier breaks down*/}
    {/*<iframe frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0} width="440" height="250" src="https://www.youtube.com/embed/cRdlY_usbiA?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"><div><small><a href="https://youtubeembedcode.com/en">https://youtubeembedcode.com/en</a></small></div></iframe>*/}
    <footer className={`${baseClass}__footer`}>
      <Button type="primary" onClick={handleDoneButtonClick}>
        {adDoneDisplayName}
      </Button>
    </footer>
  </div>
);

export default Ad;
