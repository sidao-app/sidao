import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import HOME_EN from './en/home.json';
import SETTINGS_EN from './en/settings.json';
import HOME_ZH_CN from './zh-CN/home.json';
import SETTINGS_ZH_CN from './zh-CN/settings.json';

export const resources = {
  en: {
    home: HOME_EN,
    settings: SETTINGS_EN,
  },
  zh_CN: {
    home: HOME_ZH_CN,
    settings: SETTINGS_ZH_CN,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});
