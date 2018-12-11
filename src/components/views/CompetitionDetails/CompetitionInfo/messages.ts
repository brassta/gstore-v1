import { defineMessages, Messages, FormattedMessage } from 'react-intl';

interface CustomMessages extends Messages {
  competitionInfoPrizePoolHeader: FormattedMessage.MessageDescriptor;
  competitionInfoPlaceColumn: FormattedMessage.MessageDescriptor;
  competitionInfoPrizeColumn: FormattedMessage.MessageDescriptor;
  competitionInfoCellPlace: FormattedMessage.MessageDescriptor;
}

export default defineMessages<CustomMessages>({
  competitionInfoPrizePoolHeader: {
    defaultMessage: 'Prize pool',
    id: 'competitionInfoPrizePoolHeader',
  },
  competitionInfoPlaceColumn: {
    defaultMessage: 'Place',
    id: 'competitionInfoPlaceColumn',
  },
  competitionInfoPrizeColumn: {
    defaultMessage: 'Prize',
    id: 'competitionInfoPrizeColumn',
  },
  competitionInfoCellPlace: {
    defaultMessage: 'Place',
    id: 'competitionInfoCellPlace',
  },
});
