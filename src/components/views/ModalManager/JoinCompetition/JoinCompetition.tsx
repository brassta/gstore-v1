import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import Amount from '@components/Amount';
import Button, { ButtonGroup } from '@components/Button';
import Modal from '@components/Modal';

export interface Props {
  competitionId: number;
  entryFee: number;
  joinCompetitionHeadingDisplayName: string;
  joinCompetitionAreSureDisplayName: string;
  joinCompetitionButtonJoinDisplayName: string;
  joinCompetitionButtonCancelDisplayName: string;
  joinCompetitionAreSurePayIn: FormattedMessage.MessageDescriptor;
  handleJoinClick: () => void;
  handleCancelClick: () => void;
  isMobile: boolean;
  joinCompetitionInProgress: boolean;
  joinCompetitionError: boolean;
  joinCompetitionErrorHeadingDisplayName: string;
  joinCompetitionErrorTextDisplayName: string;
  joinCompetitionButtonErrorDisplayName: string;
  handleOkClick: () => void;
}

const baseClass = 'gc-join-competition';

const JoinCompetitionContent: React.SFC<Props> = ({
  joinCompetitionHeadingDisplayName,
  joinCompetitionButtonJoinDisplayName,
  joinCompetitionButtonCancelDisplayName,
  joinCompetitionAreSureDisplayName,
  joinCompetitionAreSurePayIn,
  isMobile,
  handleJoinClick,
  handleCancelClick,
  joinCompetitionInProgress,
  entryFee,
}) => (
  <React.Fragment>
    <div className={baseClass}>
      <h2 className={`${baseClass}__heading`}>
        {joinCompetitionHeadingDisplayName}
      </h2>
      <p className={`${baseClass}__text`}>
        {entryFee ? (
          <FormattedMessage
            {...joinCompetitionAreSurePayIn}
            values={{
              entryFee: (
                <Amount
                  value={entryFee}
                  currency={'gold'}
                  showIcon={true}
                  showCurrency={false}
                  align="right"
                  className={`${baseClass}__fee`}
                />
              ),
            }}
          />
        ) : (
          joinCompetitionAreSureDisplayName
        )}
      </p>
    </div>
    <Modal.Footer footerAlign="center" className={`${baseClass}__footer`}>
      <ButtonGroup type="separate" size="medium" align="center" width="full">
        <Button width={isMobile ? 'full' : 'fixed'} onClick={handleCancelClick}>
          {joinCompetitionButtonCancelDisplayName}
        </Button>
        <Button
          type="primary"
          width={isMobile ? 'full' : 'fixed'}
          onClick={handleJoinClick}
          busy={joinCompetitionInProgress}>
          {joinCompetitionButtonJoinDisplayName}
        </Button>
      </ButtonGroup>
    </Modal.Footer>
  </React.Fragment>
);

const JoinCompetitionError: React.SFC<Props> = ({
  joinCompetitionErrorHeadingDisplayName,
  joinCompetitionErrorTextDisplayName,
  joinCompetitionButtonErrorDisplayName,
  isMobile,
  handleOkClick,
}) => (
  <React.Fragment>
    <div className={baseClass}>
      <h2 className={`${baseClass}__heading`}>
        {joinCompetitionErrorHeadingDisplayName}
      </h2>
      <p className={`${baseClass}__text`}>
        {joinCompetitionErrorTextDisplayName}
      </p>
    </div>
    <Modal.Footer footerAlign="center" className={`${baseClass}__footer`}>
      <Button
        type="primary"
        width={isMobile ? 'full' : undefined}
        onClick={handleOkClick}>
        {joinCompetitionButtonErrorDisplayName}
      </Button>
    </Modal.Footer>
  </React.Fragment>
);

const JoinCompetition: React.SFC<Props> = props => (
  <React.Fragment>
    {!props.joinCompetitionError && <JoinCompetitionContent {...props} />}
    {props.joinCompetitionError && <JoinCompetitionError {...props} />}
  </React.Fragment>
);

export default JoinCompetition;
