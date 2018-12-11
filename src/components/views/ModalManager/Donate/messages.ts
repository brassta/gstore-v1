import { defineMessages, Messages, FormattedMessage } from 'react-intl';

interface CustomMessages extends Messages {
  donateHeading: FormattedMessage.MessageDescriptor;
  donateText: FormattedMessage.MessageDescriptor;
  donateButtonText: FormattedMessage.MessageDescriptor;
  donateSuccessHeading: FormattedMessage.MessageDescriptor;
  donateSuccessText: FormattedMessage.MessageDescriptor;
  donateSuccessButtonText: FormattedMessage.MessageDescriptor;
}

export default defineMessages<CustomMessages>({
  donateHeading: {
    defaultMessage: 'You are about to help "{projectName}" project',
    id: 'donateHeading',
  },
  donateText: {
    defaultMessage:
      'Please choose the amount of {currency} you would like to donate to this project:',
    id: 'donateText',
  },
  donateButtonText: {
    defaultMessage: 'DONATE!',
    id: 'donateButtonText',
  },
  donateSuccessHeading: {
    defaultMessage: 'Thank you for making a difference!',
    id: 'donateSuccessHeading',
  },
  donateSuccessText: {
    defaultMessage:
      'Your donation of {donation} has been processed to "{projectName}" Charity. We hope you enjoyed using Donate.',
    id: 'donateSuccessText',
  },
  donateSuccessButtonText: {
    defaultMessage: 'DONE!',
    id: 'donateSuccessButtonText',
  },
  donateErrorHeading: {
    defaultMessage: 'Something went wrong',
    id: 'donateErrorHeading',
  },
  donateErrorText: {
    defaultMessage:
      'Your donation of {donation} cannot be processed at this time. Please try again.',
    id: 'donateErrorText',
  },
  donateErrorButtonText: {
    defaultMessage: 'Ok',
    id: 'donateErrorButtonText',
  },
});
