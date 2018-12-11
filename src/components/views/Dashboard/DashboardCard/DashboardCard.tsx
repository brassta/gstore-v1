import * as React from 'react';

import { FeedItem, Task, Announcement, Achievement } from 'src/types';
import { FeedItemType } from 'src/constants';

import DashboardTaskCard from './DashboardTaskCard';
import DashboardAnnouncementCard from './DashboardAnnouncementCard';
import DashboardAchievementCard from './DashboardAchievementCard';

export interface Props {
  item: FeedItem;
}

const baseClass = 'gc-dashboard-card';

const DashboardCard: React.SFC<Props> = ({ item }) => (
  <article role="article" className={baseClass}>
    {item.type === FeedItemType.TASK && (
      <DashboardTaskCard task={item.item as Task} />
    )}
    {item.type === FeedItemType.ANNOUNCEMENT && (
      <DashboardAnnouncementCard announcement={item.item as Announcement} />
    )}
    {item.type === FeedItemType.ACHIEVEMENT && (
      <DashboardAchievementCard achievement={item.item as Achievement} />
    )}
  </article>
);

export default DashboardCard;
