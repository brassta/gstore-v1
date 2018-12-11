import { defineMessages, Messages, FormattedMessage } from 'react-intl';

interface CustomMessages extends Messages {
  gameFrameToggleFullscreen: FormattedMessage.MessageDescriptor;
}

export default defineMessages<CustomMessages>({
  gameFrameToggleFullscreen: {
    defaultMessage: 'Toggle Fullscreen',
    id: 'gameFrameToggleFullscreen',
  },
});
