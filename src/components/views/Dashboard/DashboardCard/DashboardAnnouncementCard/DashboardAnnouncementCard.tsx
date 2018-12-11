import * as React from 'react';

import { Announcement } from 'src/types';

export interface Props {
  announcement: Announcement;
  announcementDisplayName: string;
}

const baseClass = 'gc-dashboard-announcement';

const DashboardAnnouncementCard: React.SFC<any> = ({
  announcement: { title, text },
  announcementDisplayName,
}) => (
  <div className={baseClass}>
    <header className="gc-dashboard-card__header">
      <h3 className="gc-heading">{announcementDisplayName}</h3>
    </header>
    <section className={`${baseClass}__content`}>
      <h4 className="gc-heading">{title}</h4>
      <article className="gc-text--alt">{text}</article>
    </section>
  </div>
);

export default DashboardAnnouncementCard;
