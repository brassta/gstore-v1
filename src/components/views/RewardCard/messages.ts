import { defineMessages, Messages, FormattedMessage } from 'react-intl';

interface CustomMessages extends Messages {
  rewardCardClaim: FormattedMessage.MessageDescriptor;
  rewardCardClaimed: FormattedMessage.MessageDescriptor;
  rewardCardFee: FormattedMessage.MessageDescriptor;
  rewardCardLadder: FormattedMessage.MessageDescriptor;
  rewardCardOngoing: FormattedMessage.MessageDescriptor;
  rewardCardPrize: FormattedMessage.MessageDescriptor;
  rewardCardStartTime: FormattedMessage.MessageDescriptor;
  rewardCardEndTime: FormattedMessage.MessageDescriptor;
  rewardCardRank: FormattedMessage.MessageDescriptor;
  rewardCardViewLadder: FormattedMessage.MessageDescriptor;
}

export default defineMessages<CustomMessages>({
  rewardCardClaim: {
    defaultMessage: 'Claim',
    id: 'rewardCardClaim',
  },
  rewardCardClaimed: {
    defaultMessage: 'Claimed',
    id: 'rewardCardClaimed',
  },
  rewardCardFee: {
    defaultMessage: 'Fee to play',
    id: 'rewardCardFee',
  },
  rewardCardLadder: {
    defaultMessage: 'Ladder',
    id: 'rewardCardLadder',
  },
  rewardCardOngoing: {
    defaultMessage: 'ONGOING',
    id: 'rewardCardOngoing',
  },
  rewardCardPrize: {
    defaultMessage: 'Prize',
    id: 'rewardCardPrize',
  },
  rewardCardStartTime: {
    defaultMessage: 'Start Time',
    id: 'rewardCardStartTime',
  },
  rewardCardEndTime: {
    defaultMessage: 'End Time',
    id: 'rewardCardEndTime',
  },
  rewardCardRank: {
    defaultMessage: 'Rank',
    id: 'rewardCardRank',
  },
  rewardCardViewLadder: {
    defaultMessage: 'View Ladder',
    id: 'rewardCardViewLadder',
  },
});
