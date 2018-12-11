import * as React from 'react';

import { socialNetworks, socialNetworkIcons, countryList } from 'src/constants';

import { FormField } from '@components/Form';
import Button, { ButtonGroup } from '@components/Button';
import Modal from '@components/Modal';

export interface Props {
  links: string[];
  handleSave: () => void;
  handleCancel: () => void;
  saveDisplayName: string;
  cancelDisplayName: string;
}

const baseClass = 'gc-edit-profile';

const getCountryList = () => {
  const countries = countryList
    .map(({ code, name }) => ({
      value: code,
      text: name,
    }))
    .sort((a, b) => (a.text < b.text ? -1 : a.text > b.text ? 1 : 0));

  countries.unshift({ value: '', text: 'Select location' });

  return countries;
};

const EditProfileSocialNetworks = ({ links }: any) => (
  <React.Fragment>
    <h4 className={`${baseClass}__social-title`}>{'Social profiles'}</h4>
    {Object.keys(socialNetworks).map(network => (
      <FormField
        key={network}
        width="full"
        value={links.find(
          (url: any) => url.indexOf(socialNetworks[network]) !== -1
        )}
        prefix={
          <Button
            className={`${baseClass}__social-profile--${network.toLowerCase()}`}
            icon={socialNetworkIcons[network]}>
            Icon
          </Button>
        }
      />
    ))}
  </React.Fragment>
);

const EditProfileFooter = ({
  onSave,
  onCancel,
  saveDisplayName,
  cancelDisplayName,
}: any) => (
  <Modal.Footer footerAlign="right" className={`${baseClass}__footer`}>
    <ButtonGroup type="separate" size="medium" align="right">
      <Button
        className={`${baseClass}__footer__action`}
        width="fixed"
        onClick={onCancel}>
        {cancelDisplayName}
      </Button>
      <Button
        className={`${baseClass}__footer__action`}
        width="fixed"
        type="primary"
        onClick={onSave}>
        {saveDisplayName}
      </Button>
    </ButtonGroup>
  </Modal.Footer>
);

const EditProfile: React.SFC<Props> = ({
  saveDisplayName,
  cancelDisplayName,
  handleSave,
  handleCancel,
  links,
}) => (
  <div className={baseClass}>
    <FormField width="full" type="text" label="Change username" />
    <FormField
      width="full"
      type="select"
      label="Location"
      options={getCountryList()}
    />
    <FormField
      width="full"
      type="textarea"
      label="About you"
      hint="Write some details about yourself"
    />
    <EditProfileSocialNetworks links={links} />
    <EditProfileFooter
      onSave={handleSave}
      onCancel={handleCancel}
      saveDisplayName={saveDisplayName}
      cancelDisplayName={cancelDisplayName}
    />
  </div>
);

export default EditProfile;
