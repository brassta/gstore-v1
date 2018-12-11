import { defineMessages, Messages, FormattedMessage } from 'react-intl';

interface CustomMessages extends Messages {
  joinCompetitionHeading: FormattedMessage.MessageDescriptor;
  joinCompetitionAreSure: FormattedMessage.MessageDescriptor;
  joinCompetitionAreSurePayIn: FormattedMessage.MessageDescriptor;
}

export default defineMessages<CustomMessages>({
  joinCompetitionHeading: {
    defaultMessage: 'Ready to play?',
    id: 'joinCompetitionHeading',
  },
  joinCompetitionAreSure: {
    defaultMessage:
      'Do you want to compete against other players and join this ladder?',
    id: 'joinCompetitionAreSure',
  },
  joinCompetitionAreSurePayIn: {
    defaultMessage:
      "To join the competition, an entry fee of {entryFee} will be deducted from your account balance. Are you sure you'd like to join?",
    id: 'joinCompetitionAreSurePayIn',
  },
  joinCompetitionButtonJoin: {
    defaultMessage: 'Join',
    id: 'joinCompetitionButtonJoin',
  },
  joinCompetitionButtonCancel: {
    defaultMessage: 'Cancel',
    id: 'joinCompetitionButtonCancel',
  },
  joinCompetitionErrorHeading: {
    defaultMessage: 'Join Ladder failed',
    id: 'joinCompetitionErrorHeading',
  },
  joinCompetitionErrorText: {
    defaultMessage: `There was an error and this Ladder couldn't be joined. Please try again.`,
    id: 'joinCompetitionErrorText',
  },
  joinCompetitionErrorButton: {
    defaultMessage: `Ok.`,
    id: 'joinCompetitionErrorButton',
  },
});
