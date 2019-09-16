import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

// the translations
// (tip move them in a JSON file and import them)
// src/locales/YOUR_LANG/LANG.json
// recomendation name lang lowercase
import en from './locales/en.json'
import ptbr from './locales/pt-br.json'

const resources = {
    en,
    ptbr
};

const detectionOptions = {
    order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
    lookupQuerystring: 'lng'
}

i18n
    .use(LanguageDetector) // detector language using detectionOptions object
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        detection: detectionOptions,
        resources,
        fallbackLng: 'en',

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;