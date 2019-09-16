import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';

// the translations
// (tip move them in a JSON file and import them)
// recomendation name lang lowercase
const detectionOptions = {
    order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
    lookupQuerystring: 'lng'
}

const backEndOptions = {
    loadPath: '/locales/{{lng}}/translation.json',
}

i18n
    .use(Backend)
    .use(LanguageDetector) // detector language using detectionOptions object
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        detection: detectionOptions,
        backend: backEndOptions,
        fallbackLng: 'ptbr',

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;