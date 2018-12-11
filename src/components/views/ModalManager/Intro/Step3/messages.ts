import { defineMessages, Messages, FormattedMessage } from 'react-intl';

interface CustomMessages extends Messages {
  step3Heading: FormattedMessage.MessageDescriptor;
  step3Text: FormattedMessage.MessageDescriptor;
}

export default defineMessages<CustomMessages>({
  step3Heading: {
    defaultMessage: 'Win MGO token!',
    id: 'step3Heading',
  },
  step3Text: {
    defaultMessage:
      'MGO is the official token of GNation. It can be earned by winning in tournaments, through special promotions or traded on exchanges. You can use it for in-game purchases via Xsolla paystation in more than 500 games.',
    id: 'step3Text',
  },
});
