import { defineMessages, Messages, FormattedMessage } from 'react-intl';

interface CustomMessages extends Messages {
  step2Heading: FormattedMessage.MessageDescriptor;
  step2Text: FormattedMessage.MessageDescriptor;
}

export default defineMessages<CustomMessages>({
  step2Heading: {
    defaultMessage: 'Play competitions!',
    id: 'step2Heading',
  },
  step2Text: {
    defaultMessage:
      'Play tournaments and win {win}! GN Gold is the virtual currency of GNation. It can be earned by playing in tournaments or using GShare. You can use it for playing in entry fee tournaments and buying items in GNation ecosystem.',
    id: 'step2Text',
  },
});
