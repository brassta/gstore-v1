import * as React from 'react';
import { Competition } from 'src/types';
import Amount from '@components/Amount/Amount';
import { CompetitionTimeTicker } from '@wrappers/TimeTicker';
import Badge from '@components/Badge';
import Button from '@components/Button';
import { playerJoinStatus } from '../../../../constants';

export interface Props {
  competition: Competition;
  startTimeDisplayName: string;
  isMobile: boolean;
  bntName: string;
  handleCardClick?: React.MouseEventHandler<HTMLDivElement>;
}

const TimeDisplay = ({ dateUntil, id, displayName }: any) => (
  <React.Fragment>
    <span
      className={`${baseClass}__inline ${baseClass}__text ${baseClass}__text--large ${baseClass}__small__top_margin`}>
      <dt>{displayName}</dt>
      <CompetitionTimeTicker dateUntil={dateUntil} id={id}>
        {({ time }) => (
          <dd className={`${baseClass}__small__right_margin`}>{time}</dd>
        )}
      </CompetitionTimeTicker>
    </span>
  </React.Fragment>
);

const baseClass = 'gc-featured-card';

const FeaturedCard: React.SFC<Props> = ({
  competition,
  startTimeDisplayName,
  isMobile,
  bntName,
  handleCardClick,
}) => (
  <div className={baseClass} onClick={handleCardClick}>
    <div
      className={`${baseClass}__image`}
      style={{ backgroundImage: `url(${competition.coverImage})` }}
    />
    <div className={`${baseClass}__content`}>
      <dl className={`${baseClass}__description`}>
        <Badge type={'inactive'}>FEATURED</Badge>
        <div>
          {
            <TimeDisplay
              id={competition.id}
              dateUntil={competition.startDate}
              displayName={startTimeDisplayName}
            />
          }
        </div>
        <dt className={`${baseClass}__text ${baseClass}__text--huge`}>
          {competition.name}
        </dt>

        <span
          className={`${baseClass}__inline ${baseClass}__text ${baseClass}__text--active`}>
          <dt>PRIZE POOL</dt>
          <dd className={`${baseClass}__small__right_margin`}>
            <Amount
              value={competition.prizePool}
              currency="gold"
              showIcon={true}
              showCurrency={false}
              align="right"
            />
          </dd>
        </span>

        <dt
          className={`${baseClass}__text ${baseClass}__text--small ${baseClass}__small__top_margin`}>
          {competition.description}
        </dt>

        {!isMobile && (
          <Button
            type={
              competition.playerJoinStatus !== playerJoinStatus.JOINED
                ? 'primary'
                : 'outline'
            }
            size={'large'}
            className={`${baseClass}__button`}
            onClick={handleCardClick}>
            {bntName.toUpperCase()}
          </Button>
        )}
      </dl>
    </div>
  </div>
);
export default FeaturedCard;
