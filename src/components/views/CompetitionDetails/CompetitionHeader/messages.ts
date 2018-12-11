import { defineMessages, Messages, FormattedMessage } from 'react-intl';

interface CustomMessages extends Messages {
  competitionHeaderName: FormattedMessage.MessageDescriptor;
  competitionHeaderPrizePool: FormattedMessage.MessageDescriptor;
  competitionHeaderStartTime: FormattedMessage.MessageDescriptor;
  competitionHeaderEndTime: FormattedMessage.MessageDescriptor;
  competitionHeaderEntryFee: FormattedMessage.MessageDescriptor;
  competitionHeaderPlayLadder: FormattedMessage.MessageDescriptor;
  competitionHeaderPractice: FormattedMessage.MessageDescriptor;
  competitionHeaderJoinLadder: FormattedMessage.MessageDescriptor;
  competitionHeaderPlayAndWin: FormattedMessage.MessageDescriptor;
  competitionHeaderJoinedLadder: FormattedMessage.MessageDescriptor;
  competitionHeaderEnded: FormattedMessage.MessageDescriptor;
  competitionHeaderOngoing: FormattedMessage.MessageDescriptor;
  competitionHeaderCompleted: FormattedMessage.MessageDescriptor;
}

export default defineMessages<CustomMessages>({
  competitionHeaderName: {
    defaultMessage: 'Ladder',
    id: 'competitionHeaderName',
  },
  competitionHeaderPrizePool: {
    defaultMessage: 'Prize pool',
    id: 'competitionHeaderPrizePool',
  },
  competitionHeaderStartTime: {
    defaultMessage: 'Start time',
    id: 'competitionHeaderStartTime',
  },
  competitionHeaderEndTime: {
    defaultMessage: 'End time',
    id: 'competitionHeaderEndTime',
  },
  competitionHeaderEntryFee: {
    defaultMessage: 'Entry fee',
    id: 'competitionHeaderEntryFee',
  },
  competitionHeaderPlayLadder: {
    defaultMessage: 'PLAY LADDER',
    id: 'competitionHeaderPlayLadder',
  },
  competitionHeaderPractice: {
    defaultMessage: 'PRACTICE',
    id: 'competitionHeaderPractice',
  },
  competitionHeaderJoinLadder: {
    defaultMessage: 'JOIN',
    id: 'competitionHeaderJoinLadder',
  },
  competitionHeaderPlayAndWin: {
    defaultMessage: 'PLAY AND WIN',
    id: 'competitionHeaderPlayAndWin',
  },
  competitionHeaderJoinedLadder: {
    defaultMessage: 'JOINED',
    id: 'competitionHeaderJoinedLadder',
  },
  competitionHeaderEnded: {
    defaultMessage: 'Ended',
    id: 'competitionHeaderEnded',
  },
  competitionHeaderOngoing: {
    defaultMessage: 'Ongoing',
    id: 'competitionHeaderOngoing',
  },
  competitionHeaderCompleted: {
    defaultMessage: 'Completed',
    id: 'competitionHeaderCompleted',
  },
});
