import { defineMessages, Messages, FormattedMessage } from 'react-intl';

interface CustomMessages extends Messages {
  step1Heading: FormattedMessage.MessageDescriptor;
  step1Text: FormattedMessage.MessageDescriptor;
}

export default defineMessages<CustomMessages>({
  step1Heading: {
    defaultMessage: 'Welcome to GNation competitive platform!',
    id: 'step1Heading',
  },
  step1Text: {
    defaultMessage:
      'We welcome you to our community, and as a token of our gratitude you will receive {received}. You can use it in many different ways, and to earn even more.',
    id: 'step1Text',
  },
});
