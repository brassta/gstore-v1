import { defineMessages, Messages, FormattedMessage } from 'react-intl';

interface CustomMessages extends Messages {
  headerTitle: FormattedMessage.MessageDescriptor;
  gshareText: FormattedMessage.MessageDescriptor;
  footerTitle: FormattedMessage.MessageDescriptor;
  downloadText: FormattedMessage.MessageDescriptor;
  windowsText: FormattedMessage.MessageDescriptor;
  linuxText: FormattedMessage.MessageDescriptor;
  macosText: FormattedMessage.MessageDescriptor;
}

export default defineMessages<CustomMessages>({
  headerTitle: {
    defaultMessage: 'Get free in game items and feel good doing it',
    id: 'headerTitle',
  },
  gshareText: {
    defaultMessage: `GShare unlocks your computer power and converts it to GN Gold that
      you can use to buy in game items in more than 700 games. With your
      extra profits you can help our partner charity projects and see
      direct impact of your actions.`,
    id: 'gshareText',
  },
  footerTitle: {
    defaultMessage: 'Download GShare, login and start earning GN Gold',
    id: 'footerTitle',
  },
  downloadText: {
    defaultMessage: `GShare is a completely free app that runs when your PC is otherwise idle, 
      earning GN Gold in the process. 
      You can use GN Gold in games to get items for free.`,
    id: 'downloadText',
  },
  windowsText: {
    defaultMessage: 'For Windows',
    id: 'windowsText',
  },
  linuxText: {
    defaultMessage: 'For Linux',
    id: 'linuxText',
  },
  macosText: {
    defaultMessage: 'For MacOS',
    id: 'macText',
  },
});
