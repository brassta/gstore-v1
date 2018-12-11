import * as React from 'react';
import classNames from 'classnames';

import Anchor from 'src/components/common/Anchor';

const baseClass = 'gc-footer';

export interface InnerProps {
  copyright: string;
  publisher: string;
  tos: string;
  privacy: string;
}

export interface OuterProps {
  inline?: boolean;
}

const Footer: React.SFC<InnerProps & OuterProps> = ({
  copyright,
  tos,
  privacy,
  inline,
}) => {
  const classes = classNames(baseClass, inline && `${baseClass}--inline`);

  return (
    <footer className={classes}>
      <menu className={`${baseClass}__menu`}>
        <li className={`${baseClass}__item`}>
          <Anchor
            target="_blank"
            href="https://gn.org/gnation-terms-of-service"
            className={`${baseClass}__link`}>
            {tos}
          </Anchor>
        </li>
        <li className={`${baseClass}__item`}>
          <Anchor
            target="_blank"
            href="https://gn.org/gnation-privacy-policy"
            className={`${baseClass}__link`}>
            {privacy}
          </Anchor>
        </li>
      </menu>
      <small className={`${baseClass}__copyright`}>{copyright}</small>
    </footer>
  );
};

export default Footer;
