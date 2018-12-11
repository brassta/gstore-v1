import { defineMessages, Messages, FormattedMessage } from 'react-intl';

interface CustomMessages extends Messages {
  emptyMatchHeader: FormattedMessage.MessageDescriptor;
  emptyMatchText1: FormattedMessage.MessageDescriptor;
  emptyMatchText2: FormattedMessage.MessageDescriptor;
}

export default defineMessages<CustomMessages>({
  emptyMatchHeader: {
    defaultMessage: 'There are still no matches played',
    id: 'emptyMatchHeader',
  },
  emptyMatchText1: {
    defaultMessage: 'Join and Play a match to be',
    id: 'emptyMatchText1',
  },
  emptyMatchText2: {
    defaultMessage: 'shown on the ladder!',
    id: 'emptyMatchText2',
  },
});
