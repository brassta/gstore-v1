import { defineMessages, Messages, FormattedMessage } from 'react-intl';

interface CustomMessages extends Messages {
  competitionRankingPlayerColumn: FormattedMessage.MessageDescriptor;
  competitionRankingRewardColumn: FormattedMessage.MessageDescriptor;
  competitionRankingScoreColumn: FormattedMessage.MessageDescriptor;
}

export default defineMessages<CustomMessages>({
  competitionRankingPlayerColumn: {
    defaultMessage: 'Player',
    id: 'competitionRankingPlayerColumn',
  },
  competitionRankingRewardColumn: {
    defaultMessage: 'Prize',
    id: 'competitionRankingRewardColumn',
  },
  competitionRankingScoreColumn: {
    defaultMessage: 'Points',
    id: 'competitionRankingScoreColumn',
  },
});
