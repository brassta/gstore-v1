import * as React from 'react';
import { isToday, distanceInWordsToNow } from 'date-fns';

import Loader from '@components/Loader/Loader';
import { FeedDay, FeedItem } from 'src/types';

import DashboardCard from '../DashboardCard';

export interface Props {
  feedTitleDisplayName: string;
  todayDisplayName: string;
  feedItems: FeedDay[];
  isFetchFeedInProgress: boolean;
}

const baseClass = 'gc-feed';

// Note:
// Card component with icons and content will be done in GNOR-114

const Feed: React.SFC<Props> = ({
  feedItems,
  feedTitleDisplayName,
  todayDisplayName,
  isFetchFeedInProgress,
}) => (
  <div className={baseClass}>
    <h2 className={`${baseClass}__heading`}>{feedTitleDisplayName}</h2>
    <div role="feed" className={`${baseClass}__timeline`}>
      {isFetchFeedInProgress ? (
        <Loader />
      ) : (
        feedItems.map(({ date, items }: FeedDay) => (
          <section key={date.toISOString()} className={`${baseClass}__section`}>
            <header className={`${baseClass}__section__header`}>
              <h4
                className={`${baseClass}__time ${
                  isToday(date) ? baseClass + '__time--today' : ''
                }`}>
                {isToday(date)
                  ? todayDisplayName
                  : distanceInWordsToNow(date, { addSuffix: true })}
              </h4>
            </header>
            {items.map((item: FeedItem) => (
              <DashboardCard key={item.item.title} item={item} />
            ))}
          </section>
        ))
      )}
    </div>
  </div>
);

export default Feed;
