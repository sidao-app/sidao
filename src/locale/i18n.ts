import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import resources from './services/resources';
import getLanguage from './services/getLanguage';

const language = getLanguage();

i18n.use(initReactI18next).init({
  resources,
  lng: language,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});
