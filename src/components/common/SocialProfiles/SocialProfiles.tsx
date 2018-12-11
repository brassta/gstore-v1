import * as React from 'react';

import { socialNetworks } from 'src/constants';

interface Props {
  links?: string[];
  showAll?: boolean;
}

const baseClass = 'gc-social-profiles';

const SocialProfiles: React.SFC<Props> = ({ links = [], showAll = false }) => {
  const titles = Object.keys(socialNetworks);

  return (
    <ul className={baseClass}>
      {titles.map(title => {
        const name = title.toLowerCase();
        const href = links.find(
          url => url.indexOf(socialNetworks[title]) !== -1
        );

        if (showAll || (!showAll && href)) {
          return (
            <li
              key={name}
              className={`${baseClass}__network ${baseClass}__network--${name}`}>
              <a
                href={href}
                target="_blank"
                rel="external"
                className={`${baseClass}__link`}>
                {title}
              </a>
            </li>
          );
        }

        return null;
      })}
    </ul>
  );
};

export default SocialProfiles;
