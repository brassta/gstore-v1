import { defineMessages, Messages, FormattedMessage } from 'react-intl';

interface CustomMessages extends Messages {
  competitionCardViewLadder: FormattedMessage.MessageDescriptor;
  competitionCardFeeToPlay: FormattedMessage.MessageDescriptor;
  competitionCardLadder: FormattedMessage.MessageDescriptor;
  competitionCardOngoing: FormattedMessage.MessageDescriptor;
  competitionCardPrizePool: FormattedMessage.MessageDescriptor;
  competitionCardStartTime: FormattedMessage.MessageDescriptor;
  competitionCardEndTime: FormattedMessage.MessageDescriptor;
  competitionCardRank: FormattedMessage.MessageDescriptor;
}

export default defineMessages<CustomMessages>({
  competitionCardViewLadder: {
    defaultMessage: 'View Ladder',
    id: 'competitionCardViewLadder',
  },
  competitionCardFeeToPlay: {
    defaultMessage: 'Free to play',
    id: 'competitionCardFeeToPlay',
  },
  competitionCardLadder: {
    defaultMessage: 'Ladder',
    id: 'competitionCardLadder',
  },
  competitionCardOngoing: {
    defaultMessage: 'ONGOING',
    id: 'competitionCardOngoing',
  },
  competitionCardPrizePool: {
    defaultMessage: 'Prize pool',
    id: 'competitionCardPrizePool',
  },
  competitionCardStartTime: {
    defaultMessage: 'Start Time',
    id: 'competitionCardStartTime',
  },
  competitionCardEndTime: {
    defaultMessage: 'End Time',
    id: 'competitionCardEndTime',
  },
  competitionCardRank: {
    defaultMessage: 'Rank',
    id: 'competitionCardRank',
  },
});
