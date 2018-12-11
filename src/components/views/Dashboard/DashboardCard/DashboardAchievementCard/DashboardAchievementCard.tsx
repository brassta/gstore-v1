import * as React from 'react';

import Achievement from '@components/Achievement';
import { Achievement as AchievementType } from 'src/types';

export interface InnerProps {
  achievementUnlockedDisplayName: string;
  dailyTaskDisplayName: string;
}

export interface OuterProps {
  achievement: AchievementType;
}

const baseClass = 'gc-dashboard-achievement';

const DashboardAchievementCard: React.SFC<InnerProps & OuterProps> = ({
  achievement: { title, type, level },
  achievementUnlockedDisplayName,
  dailyTaskDisplayName,
}) => (
  <div className={baseClass}>
    <header className="gc-dashboard-card__header">
      <h3 className="gc-heading">{dailyTaskDisplayName}</h3>
    </header>
    <section className={`${baseClass}__content`}>
      <h1 className={`${baseClass}__label`}>
        {achievementUnlockedDisplayName}
      </h1>
      <Achievement level={level} rank={type} />
      <h3 className={`${baseClass}__title`}>{title}</h3>
    </section>
  </div>
);

export default DashboardAchievementCard;
