import * as React from 'react';
import classNames from 'classnames';

import Badge from '@components/Badge';
import Button from '@components/Button';
import Card, { CardTypes } from '@components/Card';

import { Competition } from 'src/types';
import { CompetitionTimeTicker } from 'src/components/wrappers';
import Amount from '@components/Amount';

const baseClass = 'gc-competition-card';

interface Props {
  type?: CardTypes;
  competition: Competition;
  handleClick: React.MouseEventHandler;
  viewLadderDisplayName: string;
  freeToPlayDisplayName: string;
  ladderDisplayName: string;
  onGoingDisplayName: string;
  prizePoolDisplayName: string;
  startTimeDisplayName: string;
  isDesktop: boolean;
  className?: string;
  rankDisplayName: string;
}

const CardCaption: any = ({ freeToPlayDisplayName }: any) => (
  <label className="gc-card__info">
    <small className="gc-card__label--white">{freeToPlayDisplayName}</small>
  </label>
);

const CardHeader: any = ({
  title,
  active,
  isDesktop,
  ladderDisplayName,
  onGoingDisplayName,
  type,
}: any) => (
  <React.Fragment>
    <label className="gc-card__info">
      <strong className="gc-card__label">{ladderDisplayName}</strong>
      <strong className="gc-card__title">{title}</strong>
    </label>
    {active &&
      type !== 'full' && (
        <span className="gc-card__status">
          <Badge size={!isDesktop ? 'small' : undefined}>
            {onGoingDisplayName}
          </Badge>
        </span>
      )}
  </React.Fragment>
);

const TimeDisplay = ({ id, dateUntil, displayName }: any) => (
  <React.Fragment>
    <strong className="gc-card__label">{displayName}</strong>
    <CompetitionTimeTicker dateUntil={dateUntil} id={id}>
      {({ time }) => <strong className="gc-card__value">{time}</strong>}
    </CompetitionTimeTicker>
  </React.Fragment>
);

const CardContent: any = ({
  prize,
  isOngoing,
  hasExpired,
  startDate,
  endDate,
  id,
  prizeCurrency,
  prizePoolDisplayName,
  startTimeDisplayName,
  endTimeDisplayName,
  rank,
  rankDisplayName,
  type,
}: any) => (
  <React.Fragment>
    <label className="gc-card__info">
      <strong className="gc-card__label">{prizePoolDisplayName}</strong>
      <strong className="gc-card__value">
        <span className="gc-text--gold">
          <Amount
            value={prize}
            currency={prizeCurrency}
            size="large"
            align="right"
            showIcon
          />
        </span>
      </strong>
    </label>
    <label className="gc-card__info">
      {!isOngoing &&
        !hasExpired && (
          <TimeDisplay
            dateUntil={startDate}
            id={id}
            displayName={startTimeDisplayName}
          />
        )}
      {isOngoing && (
        <TimeDisplay
          dateUntil={endDate}
          id={id}
          displayName={endTimeDisplayName}
        />
      )}
    </label>
    {rank && (
      <label className="gc-card__info">
        <small className="gc-card__label">{rankDisplayName}</small>
        <strong className="gc-card__value">{rank}</strong>
      </label>
    )}
  </React.Fragment>
);

class CompetitionCard extends React.PureComponent<Props> {
  render() {
    const {
      type,
      competition,
      className,
      viewLadderDisplayName,
      handleClick,
      rankDisplayName,
    } = this.props;

    const {
      name,
      cardImage,
      prizePool,
      entryFee,
      isOngoing,
      startDate,
      endDate,
      prizeCurrency,
      id,
      hasExpired,
      rank,
    } = competition;

    const classes = classNames(baseClass, className);

    return (
      <Card
        type={type}
        img={cardImage}
        title={name}
        caption={!entryFee && <CardCaption {...this.props} />}
        header={<CardHeader {...this.props} title={name} active={isOngoing} />}
        details={
          <CardContent
            {...this.props}
            isOngoing={isOngoing}
            hasExpired={hasExpired}
            prize={prizePool}
            startDate={startDate}
            endDate={endDate}
            prizeCurrency={prizeCurrency}
            rank={rank}
            rankDisplayName={rankDisplayName}
            id={id}
          />
        }
        action={
          type === 'full' && (
            <Button onClick={handleClick}>{viewLadderDisplayName}</Button>
          )
        }
        onClick={type === 'full' ? f => f : handleClick}
        className={classes}
      />
    );
  }
}

export default CompetitionCard;
