import * as React from 'react';

import EmptySVG from '@images/stadium.svg';

interface Props {
  noMatchesHeaderDisplayName: string;
  noMatchesText1: string;
  noMatchesText2: string;
}

const baseClass = 'gc-empty-match';

const EmptyMatch: React.SFC<Props> = ({
  noMatchesHeaderDisplayName,
  noMatchesText1,
  noMatchesText2,
}) => (
  <div className={baseClass}>
    <EmptySVG />
    <h2 className={`${baseClass}__header`}>{noMatchesHeaderDisplayName}</h2>
    <div className={`${baseClass}__text`}>{noMatchesText1}</div>
    <div className={`${baseClass}__text`}>{noMatchesText2}</div>
  </div>
);

export default EmptyMatch;
