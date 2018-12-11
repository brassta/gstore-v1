import { defineMessages, Messages, FormattedMessage } from 'react-intl';

interface CustomMessages extends Messages {
  gameFinishedHeader: FormattedMessage.MessageDescriptor;
  gameFinishedWinnerMessage: FormattedMessage.MessageDescriptor;
  gameFinishedLoserMessage: FormattedMessage.MessageDescriptor;
  gameFinishedGetAction: FormattedMessage.MessageDescriptor;
  gameFinishedCheckAction: FormattedMessage.MessageDescriptor;
  gameFinishedErrorMessage: FormattedMessage.MessageDescriptor;
  gameFinishedMgoAddressMessage: FormattedMessage.MessageDescriptor;
  yourAddressMessage: FormattedMessage.MessageDescriptor;
}

export default defineMessages<CustomMessages>({
  gameFinishedHeader: {
    defaultMessage: 'Challenge completed!',
    id: 'gameFinishedHeader',
  },
  gameFinishedWinnerMessage: {
    defaultMessage:
      'Congratulations, you have successfully\n finished the challenge and won {prize}.',
    id: 'gameFinishedWinnerMessage',
  },
  gameFinishedLoserMessage: {
    defaultMessage:
      'Congratulations, you have successfully finished\n the challenge!',
    id: 'gameFinishedLoserMessage',
  },
  gameFinishedRank: {
    defaultMessage: 'You are currently ranked {rank}.',
    id: 'gameFinishedRank',
  },
  gameFinishedGetAction: {
    defaultMessage: 'Get reward',
    id: 'gameFinishedGetAction',
  },
  gameFinishedCheckAction: {
    defaultMessage: 'Check ranking',
    id: 'gameFinishedCheckAction',
  },
  gameFinishedErrorMessage: {
    defaultMessage:
      "There was an error and reward couldn't be claimed. Please try again.",
    id: 'gameFinishedErrorMessage',
  },
  gameFinishedMgoAddressMessage: {
    defaultMessage:
      'Please add you address bellow to send the whole amount at one transaction.',
    id: 'gameFinishedMgoAddressMessage',
  },
  yourAddressMessage: {
    defaultMessage: 'Your address',
    id: 'yourAddressMessage',
  },
});
