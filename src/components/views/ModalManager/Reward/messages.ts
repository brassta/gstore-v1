import { defineMessages, Messages, FormattedMessage } from 'react-intl';

interface CustomMessages extends Messages {
  yourReward: FormattedMessage.MessageDescriptor;
}

export default defineMessages<CustomMessages>({
  yourReward: {
    defaultMessage: `Your reward for today's Task is:`,
    id: 'yourReward',
  },
});
