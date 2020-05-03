import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import enLocale from './locales/en.json';
import viLocale from './locales/vi.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      vi: {
        translation: viLocale,
      },
      en: {
        translation: enLocale,
      },
    },
    lng: localStorage.getItem('language'),
    fallbackLng: 'vi',
    interpolation: {
      escapeValue: false,
    },
  });
