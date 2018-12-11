import { defineMessages, FormattedMessage, Messages } from 'react-intl';

interface CustomMessages extends Messages {
  copyright: FormattedMessage.MessageDescriptor;
  publisher: FormattedMessage.MessageDescriptor;
  tos: FormattedMessage.MessageDescriptor;
  privacy: FormattedMessage.MessageDescriptor;
}

export default defineMessages<CustomMessages>({
  copyright: {
    id: 'copyright',
    defaultMessage: 'Copyright © {year}, GNation. All rights reserved.',
  },
  publisher: {
    id: 'publisher',
    defaultMessage: 'Publisher',
  },
  tos: {
    id: 'tos',
    defaultMessage: 'Terms of Service',
  },
  privacy: {
    id: 'privacy',
    defaultMessage: 'Privacy Policy',
  },
});
