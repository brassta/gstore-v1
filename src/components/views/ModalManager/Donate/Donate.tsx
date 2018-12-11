import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import { Donation } from 'src/types';
import Slider from '@components/Slider';
import Button, { ButtonGroup } from '@components/Button';
import Modal from '@components/Modal';

export interface Props {
  isMobile: boolean;
  goldBalance: number;
  projectName: string;
  donateHeadingDisplayName: string;
  donateButtonTextDisplayName: string;
  donateText: FormattedMessage.MessageDescriptor;
  handleDonateClick: () => void;
  handleDonateOkClick: () => void;
  handleSliderChange: () => void;
  isDonateSuccess: boolean;
  isDonateError: boolean;
  isDonateInProgress: boolean;
  donateSuccessHeadingDisplayName: string;
  donateSuccessText: FormattedMessage.MessageDescriptor;
  donateSuccessButtonTextDisplayName: string;
  donateErrorHeadingDisplayName: string;
  donateErrorText: FormattedMessage.MessageDescriptor;
  donateErrorButtonTextDisplayName: string;
  donation: Donation;
}

const baseClass = 'gc-donate';

const DonateForm: React.SFC<Props> = ({
  isMobile,
  goldBalance,
  donateHeadingDisplayName,
  donateText,
  handleDonateClick,
  donateButtonTextDisplayName,
  isDonateSuccess,
  isDonateInProgress,
  handleSliderChange,
}) => (
  <React.Fragment>
    <div className={baseClass}>
      <h2 className={`${baseClass}__heading`}>{donateHeadingDisplayName}</h2>
      <p className={`${baseClass}__text`}>
        <FormattedMessage
          {...donateText}
          values={{
            currency: <span className={`${baseClass}__currency`}>GN GOLD</span>,
          }}
        />
      </p>

      <Slider
        min={50}
        max={goldBalance}
        value={100}
        ticks={false}
        size="full"
        onChange={handleSliderChange}
      />
    </div>
    <Modal.Footer footerAlign="center" className={`${baseClass}__footer`}>
      <ButtonGroup type="separate" size="medium" align="center" width="full">
        <Button
          type="primary"
          width={isMobile ? 'full' : undefined}
          onClick={handleDonateClick}
          busy={isDonateInProgress}>
          {donateButtonTextDisplayName}
        </Button>
      </ButtonGroup>
    </Modal.Footer>
  </React.Fragment>
);

const DonateSuccess: React.SFC<Props> = ({
  isMobile,
  donateSuccessHeadingDisplayName,
  donateSuccessText,
  handleDonateOkClick,
  donateButtonTextDisplayName,
  donateSuccessButtonTextDisplayName,
  projectName,
  donation: { amount },
}) => (
  <React.Fragment>
    <div className={baseClass}>
      <h2 className={`${baseClass}__heading`}>
        {donateSuccessHeadingDisplayName}
      </h2>
      <p className={`${baseClass}__text`}>
        <FormattedMessage
          {...donateSuccessText}
          values={{
            donation: (
              <span className={`${baseClass}__currency`}>{amount} GN GOLD</span>
            ),
            projectName,
          }}
        />
      </p>
    </div>
    <Modal.Footer footerAlign="center" className={`${baseClass}__footer`}>
      <ButtonGroup type="separate" size="medium" align="center" width="full">
        <Button
          type="primary"
          onClick={handleDonateOkClick}
          width={isMobile ? 'full' : undefined}>
          {donateSuccessButtonTextDisplayName}
        </Button>
      </ButtonGroup>
    </Modal.Footer>
  </React.Fragment>
);

const DonateError: React.SFC<Props> = ({
  isMobile,
  handleDonateOkClick,
  donateErrorHeadingDisplayName,
  donateErrorText,
  donateErrorButtonTextDisplayName,
  donation: { amount },
}) => (
  <React.Fragment>
    <div className={baseClass}>
      <h2 className={`${baseClass}__heading`}>
        {donateErrorHeadingDisplayName}
      </h2>
      <p className={`${baseClass}__text`}>
        <FormattedMessage
          {...donateErrorText}
          values={{
            donation: (
              <span className={`${baseClass}__currency`}>{amount} GN GOLD</span>
            ),
          }}
        />
      </p>
    </div>
    <Modal.Footer footerAlign="center" className={`${baseClass}__footer`}>
      <ButtonGroup type="separate" size="medium" align="center" width="full">
        <Button
          type="primary"
          onClick={handleDonateOkClick}
          width={isMobile ? 'full' : undefined}>
          {donateErrorButtonTextDisplayName}
        </Button>
      </ButtonGroup>
    </Modal.Footer>
  </React.Fragment>
);

const Donate: React.SFC<Props> = props => (
  <React.Fragment>
    {props.isDonateSuccess && <DonateSuccess {...props} />}
    {props.isDonateError && <DonateError {...props} />}
    {!props.isDonateSuccess &&
      !props.isDonateError && <DonateForm {...props} />}
  </React.Fragment>
);

export default Donate;
