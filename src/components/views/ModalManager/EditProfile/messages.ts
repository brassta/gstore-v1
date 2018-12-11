import { defineMessages, Messages, FormattedMessage } from 'react-intl';

interface CustomMessages extends Messages {
  editProfileSave: FormattedMessage.MessageDescriptor;
  editProfileCancel: FormattedMessage.MessageDescriptor;
}

export default defineMessages<CustomMessages>({
  editProfileSave: {
    defaultMessage: 'Save',
    id: 'editProfileSave',
  },
  editProfileCancel: {
    defaultMessage: 'Cancel',
    id: 'editProfileCancel',
  },
});
