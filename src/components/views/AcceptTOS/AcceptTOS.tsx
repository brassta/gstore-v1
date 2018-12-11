import * as React from 'react';

// import Logo from '@images/logo.svg';
import Logo from '@components/Logo';
import Checkbox from '@components/Checkbox';
import Label from '@components/Label';
import Button from '@components/Button';
import Form from '@components/Form';
import Footer from '@views/Footer';

export interface Props {
  oldEnough: boolean;
  acceptedTOS: boolean;
  handleAgeChange: () => void;
  handleAcceptTOSChange: () => void;
  handleAcceptTOSClick: () => void;
  acceptTOSHeadingDisplayName: string;
  acceptTOSTitleDisplayName: string;
  acceptTOSTextDisplayName: string;
  acceptTOSAgreeLabelDisplayName: string;
  acceptTOSAgeLabelDisplayName: string;
  acceptTOSButtonDisplayName: string;
}

const baseClass = 'gc-accept-tos';

const AcceptTOS: React.SFC<Props> = ({
  oldEnough,
  acceptedTOS,
  handleAgeChange,
  handleAcceptTOSChange,
  handleAcceptTOSClick,
  acceptTOSHeadingDisplayName,
  acceptTOSTitleDisplayName,
  acceptTOSTextDisplayName,
  acceptTOSAgeLabelDisplayName,
  acceptTOSAgreeLabelDisplayName,
  acceptTOSButtonDisplayName,
}) => (
  <div className={baseClass}>
    <Logo size="large" />

    <Form
      type="dialog"
      className={`${baseClass}__box`}
      footer={
        <Form.Footer align="center" className={`${baseClass}__box__footer`}>
          <Button
            type="primary"
            size="large"
            disabled={!oldEnough || !acceptedTOS}
            onClick={handleAcceptTOSClick}>
            {acceptTOSButtonDisplayName}
          </Button>
        </Form.Footer>
      }>
      <h2>{acceptTOSHeadingDisplayName}</h2>
      <div
        className={`${baseClass}__text`}
        dangerouslySetInnerHTML={{ __html: acceptTOSTextDisplayName }}
      />

      <Label text={acceptTOSAgreeLabelDisplayName} type="checkbox">
        <Checkbox checked={acceptedTOS} onChange={handleAcceptTOSChange} />
      </Label>
      <Label text={acceptTOSAgeLabelDisplayName} type="checkbox">
        <Checkbox checked={oldEnough} onChange={handleAgeChange} />
      </Label>
    </Form>

    <Footer inline />
  </div>
);

export default AcceptTOS;
