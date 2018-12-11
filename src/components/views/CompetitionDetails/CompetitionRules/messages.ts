import { defineMessages, Messages, FormattedMessage } from 'react-intl';

interface CustomMessages extends Messages {
  competitionRulesTitle: FormattedMessage.MessageDescriptor;
  competitionRulesNoRules: FormattedMessage.MessageDescriptor;
}

export default defineMessages<CustomMessages>({
  competitionRulesTitle: {
    defaultMessage: 'Ladder rules',
    id: 'competitionRulesTitle',
  },
  competitionRulesNoRules: {
    defaultMessage: 'No rules to display',
    id: 'competitionRulesNoRules',
  },
});
