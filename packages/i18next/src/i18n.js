import i18n from "i18next";
import { initReactI18next } from "react-i18next";

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

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "ptbr", // base lang
        fallbackLng: "en",

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;