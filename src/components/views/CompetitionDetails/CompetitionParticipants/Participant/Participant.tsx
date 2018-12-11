import * as React from 'react';

import Avatar from '@components/Avatar';

interface Props {
  username: string;
  avatar: string;
  playerDisplayName: string;
  isMobile: boolean;
}

const baseClass = 'gc-participant';

const Participant: React.SFC<Props> = ({
  username,
  avatar,
  playerDisplayName,
  isMobile,
}) => (
  <div className={baseClass}>
    <Avatar src={avatar} size={!isMobile ? 'small' : undefined} />
    <div className={`${baseClass}__description`}>
      <small className="gc-text--secondary">{playerDisplayName}</small>
      <div className={`${baseClass}__username`}>{username}</div>
    </div>
  </div>
);

export default Participant;
