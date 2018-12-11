import { defineMessages, Messages, FormattedMessage } from 'react-intl';

interface CustomMessages extends Messages {
  competitionDetailsRanking: FormattedMessage.MessageDescriptor;
  competitionDetailsInfo: FormattedMessage.MessageDescriptor;
  competitionDetailsParticipants: FormattedMessage.MessageDescriptor;
  competitionDetailsRules: FormattedMessage.MessageDescriptor;
}

export default defineMessages<CustomMessages>({
  competitionDetailsRanking: {
    defaultMessage: 'Ranking',
    id: 'competitionDetailsRanking',
  },
  competitionDetailsInfo: {
    defaultMessage: 'Prizes',
    id: 'competitionDetailsPrizes',
  },
  competitionDetailsParticipants: {
    defaultMessage: 'Players',
    id: 'competitionDetailsParticipants',
  },
  competitionDetailsRules: {
    defaultMessage: 'Rules',
    id: 'competitionDetailsRules',
  },
});
