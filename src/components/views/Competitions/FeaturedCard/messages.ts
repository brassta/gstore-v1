import { defineMessages, Messages, FormattedMessage } from 'react-intl';

interface CustomMessages extends Messages {
  featuredCardViewLadder: FormattedMessage.MessageDescriptor;
  featuredCardFeeToPlay: FormattedMessage.MessageDescriptor;
  featuredCardLadder: FormattedMessage.MessageDescriptor;
  featuredCardOngoing: FormattedMessage.MessageDescriptor;
  featuredCardPrizePool: FormattedMessage.MessageDescriptor;
  featuredCardStartTime: FormattedMessage.MessageDescriptor;
  featuredCardEndTime: FormattedMessage.MessageDescriptor;
  featuredCardRank: FormattedMessage.MessageDescriptor;
  featuredCardJoinLadder: FormattedMessage.MessageDescriptor;
}

export default defineMessages<CustomMessages>({
  featuredCardViewLadder: {
    defaultMessage: 'View Ladder',
    id: 'competitionCardViewLadder',
  },
  featuredCardFeeToPlay: {
    defaultMessage: 'Free to play',
    id: 'competitionCardFeeToPlay',
  },
  featuredCardLadder: {
    defaultMessage: 'Ladder',
    id: 'competitionCardLadder',
  },
  featuredCardOngoing: {
    defaultMessage: 'ONGOING',
    id: 'competitionCardOngoing',
  },
  featuredCardPrizePool: {
    defaultMessage: 'Prize pool',
    id: 'competitionCardPrizePool',
  },
  featuredCardStartTime: {
    defaultMessage: 'START TIME',
    id: 'featuredCardStartTime',
  },
  featuredCardEndTime: {
    defaultMessage: 'End Time',
    id: 'competitionCardEndTime',
  },
  featuredCardRank: {
    defaultMessage: 'Rank',
    id: 'competitionCardRank',
  },
  featuredCardJoinLadder: {
    defaultMessage: 'JOIN',
    id: 'joinCompetitionButtonJoin',
  },
  competitionHeaderJoined: {
    defaultMessage: 'Joined',
    id: 'competitionHeaderJoined',
  },
});
