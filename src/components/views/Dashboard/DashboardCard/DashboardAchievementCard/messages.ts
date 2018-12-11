import { defineMessages, Messages, FormattedMessage } from 'react-intl';

interface CustomMessages extends Messages {
  achievementUnlocked: FormattedMessage.MessageDescriptor;
}

export default defineMessages<CustomMessages>({
  achievementUnlocked: {
    defaultMessage: 'Achievement Unlocked',
    id: 'achievementUnlocked',
  },
  dailyTask: {
    defaultMessage: 'Daily Task',
    id: 'dailyTask',
  },
});
