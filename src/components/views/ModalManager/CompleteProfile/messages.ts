import { defineMessages, Messages, FormattedMessage } from 'react-intl';

interface CustomMessages extends Messages {
  completeProfileTitle: FormattedMessage.MessageDescriptor;
  completeProfileText: FormattedMessage.MessageDescriptor;
  okButtonText: FormattedMessage.MessageDescriptor;
}

export default defineMessages<CustomMessages>({
  completeProfileTitle: {
    defaultMessage: 'Get {award} by completing your member profile',
    id: 'completeProfileTitle',
  },
  completeProfileText: {
    defaultMessage:
      'Filling out your member profile is easy. So is earning the additional {award} Rewards Points that come with it.',
    id: 'completeProfileText',
  },
  okButtonText: {
    defaultMessage: 'Got it!',
    id: 'okButtonText',
  },
});
