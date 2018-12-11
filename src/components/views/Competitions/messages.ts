import { defineMessages, Messages, FormattedMessage } from 'react-intl';

interface CustomMessages extends Messages {
  activeTournaments: FormattedMessage.MessageDescriptor;
  myTournaments: FormattedMessage.MessageDescriptor;
  myRewards: FormattedMessage.MessageDescriptor;
}

export default defineMessages<CustomMessages>({
  activeTournaments: {
    defaultMessage: 'Active Tournaments',
    id: 'activeTournaments',
  },
  myTournaments: {
    defaultMessage: 'My Tournaments',
    id: 'myTournaments',
  },
  myRewards: {
    defaultMessage: 'Rewards',
    id: 'myRewards',
  },
});
