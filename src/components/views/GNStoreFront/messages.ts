import {defineMessages, Messages, FormattedMessage} from 'react-intl';

interface CustomMessages extends Messages {
    allProducts: FormattedMessage.MessageDescriptor;
    games: FormattedMessage.MessageDescriptor;
    subscriptions: FormattedMessage.MessageDescriptor;
    giftCards: FormattedMessage.MessageDescriptor;
    points: FormattedMessage.MessageDescriptor;
    dlc: FormattedMessage.MessageDescriptor;
    gamingSoftware: FormattedMessage.MessageDescriptor;
}

export default defineMessages<CustomMessages>({
    allProducts: {
        defaultMessage: 'All Products',
        id: 'allProducts',
    },
    games: {
        defaultMessage: 'Games',
        id: 'games',
    },
    subscriptions: {
        defaultMessage: 'Subscriptions',
        id: 'subscriptions',
    },
    giftCards: {
        defaultMessage: 'Gift Cards',
        id: 'giftCards',
    },
    points: {
        defaultMessage: 'Points',
        id: 'points',
    },
    dlc: {
        defaultMessage: 'DLC',
        id: 'dlc',
    },
    gamingSoftware: {
        defaultMessage: 'Gaming Software',
        id: 'gamingSoftware',
    },
});