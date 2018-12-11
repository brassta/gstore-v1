import * as React from 'react';
import classNames from 'classnames';

import Gauge from '@components/Gauge';
import AchievementImage from '@images/achievement.svg';

interface Props {
  rank: string;
  level: number;
  maxLevel?: number;
  className?: string;
}

const baseClass = 'gc-achievement';

const Achievement: React.SFC<Props> = ({
  rank,
  level,
  maxLevel = 10,
  className,
}) => {
  const classes = classNames(baseClass, className);

  return (
    <div className={classes}>
      <Gauge value={5} className={`${baseClass}__gauge`} />
      <figure className={`${baseClass}__badge`}>
        <AchievementImage />
        <figcaption className={`${baseClass}__rank`}>{rank}</figcaption>
      </figure>
      <strong className={`${baseClass}__level`}>
        {level} <em className={`${baseClass}__level__max`}>/ {maxLevel}</em>
      </strong>
    </div>
  );
};

export default Achievement;
