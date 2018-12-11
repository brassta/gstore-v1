import { defineMessages, Messages, FormattedMessage } from 'react-intl';

interface CustomMessages extends Messages {
  insufficientFundsHeading: FormattedMessage.MessageDescriptor;
  insufficientFundsText: FormattedMessage.MessageDescriptor;
  insufficientFundsDailyTasks: FormattedMessage.MessageDescriptor;
  insufficientFundsQuizzes: FormattedMessage.MessageDescriptor;
  insufficientFundsTournaments: FormattedMessage.MessageDescriptor;
  insufficientFundsOK: FormattedMessage.MessageDescriptor;
  insufficientFundsDonateText: FormattedMessage.MessageDescriptor;
  insufficientFundsJoinLadderText: FormattedMessage.MessageDescriptor;
}

export default defineMessages<CustomMessages>({
  insufficientFundsHeading: {
    defaultMessage: 'You don’t have enough gold',
    id: 'insufficientFundsHeading',
  },
  insufficientFundsDonateText: {
    defaultMessage: 'You need at least {minimumDonation}.',
    id: 'insufficientFundsDonateText',
  },
  insufficientFundsJoinLadderText: {
    defaultMessage: 'You need more gold to join this ladder.',
    id: 'insufficientFundsJoinLadderText',
  },
  insufficientFundsText: {
    defaultMessage:
      'To increase your balance try to finish some {dailyTasksLink}, {quizzesLink}, {tournamentsLink} and earn gold, or try {GShareLink} utility to dig gold.',
    id: 'insufficientFundsText',
  },
  insufficientFundsDailyTasks: {
    defaultMessage: 'daily tasks',
    id: 'insufficientFundsDailyTasks',
  },
  insufficientFundsQuizzes: {
    defaultMessage: 'quizzes',
    id: 'insufficientFundsQuizzes',
  },
  insufficientFundsTournaments: {
    defaultMessage: 'join free to play tournaments',
    id: 'insufficientFundsTournaments',
  },
  insufficientFundsOK: {
    defaultMessage: 'Close',
    id: 'insufficientFundsOK',
  },
});
