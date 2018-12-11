import { addLocaleData } from 'react-intl';
// @ts-ignore
import enLocaleData from 'react-intl/locale-data/en';
// @ts-ignore
import ruLocaleData from 'react-intl/locale-data/ru';

const en = require('./locales/en.json');
const ru = require('./locales/ru.json');

addLocaleData([...enLocaleData, ...ruLocaleData]);

type TranslationMap = { [key: string]: string };

export const translations: { [key: string]: TranslationMap } = {
  en,
  ru,
};
