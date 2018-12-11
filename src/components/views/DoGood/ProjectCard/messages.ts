import { defineMessages, Messages, FormattedMessage } from 'react-intl';

interface CustomMessages extends Messages {
  doGoodDonate: FormattedMessage.MessageDescriptor;
  doGoodDonated: FormattedMessage.MessageDescriptor;
  doGoodGoal: FormattedMessage.MessageDescriptor;
  doGoodLearnMore: FormattedMessage.MessageDescriptor;
}

export default defineMessages<CustomMessages>({
  doGoodDonate: {
    defaultMessage: 'Donate',
    id: 'doGoodDonate',
  },
  doGoodDonated: {
    defaultMessage: 'Donated',
    id: 'doGoodDonated',
  },
  doGoodGoal: {
    defaultMessage: 'Goal',
    id: 'doGoodGoal',
  },
  doGoodLearnMore: {
    defaultMessage: 'Learn more',
    id: 'doGoodLearnMore',
  },
});
