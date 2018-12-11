import * as React from 'react';
import { format } from 'date-fns';

import Amount, { AmountCurrency } from '@components/Amount/Amount';
import Button from '@components/Button/Button';
import Badge from '@components/Badge';

import { CompetitionTimeTicker } from 'src/components/wrappers';

interface Props {
  name: string;
  prizePool: number;
  startDate: string;
  endDate: string;
  entryFee: number;
  id: string;
  nameDisplayName: string;
  ongoingDisplayName: string;
  completedDisplayName: string;
  prizePoolDisplayName: string;
  prizeCurrency: AmountCurrency;
  feeCurrency: AmountCurrency;
  startTimeDisplayName: string;
  endTimeDisplayName: string;
  endedDisplayName: string;
  entryFeeDisplayName: string;
  // practiceDisplayName: string;
  playLadderDisplayName: string;
  joinLadderDisplayName: string;
  playAndWinLadderDisplayName: string;
  joinedLadderDisplayName: string;
  isPlayable: boolean;
  isJoined: boolean;
  coverImage: string;
  hasExpired: boolean;
  isOngoing: boolean;
  isMobile: boolean;
  handleJoin: () => void;
  handlePlay: () => void;
  playerJoinStatus: string;
  // handlePractice: () => void;
}

const baseClass = 'gc-competition-header';

const TimeDisplay = ({ dateUntil, id, displayName }: any) => (
  <React.Fragment>
    <dt className={`${baseClass}__label gc-text--small`}>{displayName}</dt>
    <CompetitionTimeTicker dateUntil={dateUntil} id={id}>
      {({ time }) => (
        <dd className={`${baseClass}__text ${baseClass}__text--large`}>
          {time}
        </dd>
      )}
    </CompetitionTimeTicker>
  </React.Fragment>
);

const CompetitionHeader: React.SFC<Props> = (props: Props) => {
  const {
    nameDisplayName,
    prizePoolDisplayName,
    startTimeDisplayName,
    ongoingDisplayName,
    completedDisplayName,
    endTimeDisplayName,
    endedDisplayName,
    entryFeeDisplayName,
    // practiceDisplayName,
    // playLadderDisplayName,
    prizeCurrency,
    feeCurrency,
    joinLadderDisplayName,
    playAndWinLadderDisplayName,
    joinedLadderDisplayName,
    name,
    prizePool,
    id,
    startDate,
    endDate,
    entryFee,
    //  isPlayable,
    isJoined,
    coverImage,
    hasExpired,
    isOngoing,
    isMobile,
    handleJoin,
    //  handlePlay,
    // handlePractice,
  } = props;

  const bntName = isJoined
    ? joinedLadderDisplayName
    : isOngoing
      ? playAndWinLadderDisplayName
      : joinLadderDisplayName;

  return (
    <div className={baseClass}>
      <div
        className={`${baseClass}__image`}
        style={{ backgroundImage: `url(${coverImage})` }}
      />
      <div className={`${baseClass}__content`}>
        <dl className={`${baseClass}__description`}>
          <dt className={`${baseClass}__label ${baseClass}__text--large`}>
            {nameDisplayName}
          </dt>
          <dd className={`${baseClass}__text ${baseClass}__text--huge`}>
            {name}
          </dd>

          <dt className={`${baseClass}__label`}>{prizePoolDisplayName}</dt>
          <dd className={`${baseClass}__text ${baseClass}__text--active`}>
            <Amount
              value={prizePool}
              currency={prizeCurrency}
              showIcon={true}
              showCurrency={false}
              align="right"
            />
          </dd>
          {!hasExpired &&
            !isOngoing && (
              <TimeDisplay
                id={id}
                dateUntil={startDate}
                displayName={startTimeDisplayName}
              />
            )}
          {!hasExpired &&
            isOngoing && (
              <TimeDisplay
                id={id}
                dateUntil={endDate}
                displayName={endTimeDisplayName}
              />
            )}
          {hasExpired && (
            <React.Fragment>
              <dt className={`${baseClass}__label gc-text--small`}>
                {endedDisplayName}
              </dt>
              <dd className={`${baseClass}__text ${baseClass}__text--large`}>
                {format(endDate, 'DD/MM/YYYY')}
              </dd>
            </React.Fragment>
          )}
          {entryFee !== undefined &&
            entryFee !== null &&
            entryFee > 0 && (
              <React.Fragment>
                <dt className={`${baseClass}__label gc-text--small`}>
                  {entryFeeDisplayName}
                </dt>
                <dd className={`${baseClass}__text ${baseClass}__text--active`}>
                  <Amount
                    value={entryFee}
                    currency={feeCurrency}
                    showIcon={true}
                    showCurrency={false}
                    align="right"
                  />
                </dd>
              </React.Fragment>
            )}
          {isOngoing && (
            <dd className={`${baseClass}__status`}>
              <Badge>{ongoingDisplayName}</Badge>
            </dd>
          )}
          {hasExpired && (
            <dd className={`${baseClass}__status`}>
              <Badge type="inactive">{completedDisplayName}</Badge>
            </dd>
          )}
        </dl>
        <div className={`${baseClass}__controls`}>
          {/*<Button*/}
          {/*type="secondary"*/}
          {/*size="large"*/}
          {/*width="fixed"*/}
          {/*onClick={handlePractice}>*/}
          {/*{practiceDisplayName}*/}
          {/*</Button>*/}
          {/*{isPlayable && (*/}
          {/*<Button*/}
          {/*type="primary"*/}
          {/*size={!isMobile ? 'large' : undefined}*/}
          {/*width={!isMobile ? 'fixed' : 'full'}*/}
          {/*disabled={hasExpired}*/}
          {/*onClick={handlePlay}>*/}
          {/*{playLadderDisplayName}*/}
          {/*</Button>*/}
          {/*)}*/}
          {!isJoined &&
            !hasExpired && (
              <Button
                type="primary"
                size={!isMobile ? 'large' : undefined}
                width={!isMobile ? 'fixed' : 'full'}
                onClick={handleJoin}>
                {bntName}
              </Button>
            )}
        </div>
      </div>
    </div>
  );
};

export default CompetitionHeader;
