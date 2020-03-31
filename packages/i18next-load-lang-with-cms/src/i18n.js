import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import BackendAdapter from 'i18next-multiload-backend-adapter';
import { BackendMultLoadPath } from './BackendAdapter'

const fallbackLng = false
const urlPath = `${process.env.REACT_APP_CONTENTFULL_API_URL}/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}`
const detectionOptions = {
  order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
  lookupQuerystring: 'lng'
}
const backEndOptions = {
  loadPath: [
    `${urlPath}/entries/4BRlVCcabfujBkTTCZnfOX?locale={{lng}}`,
    `${urlPath}/entries/7KnUXZOh3n7IiQ8HFGIyxY?locale={{lng}}`
  ],
  queryStringParams: {
    'access_token': `${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`,
  },
  parsePayload: (payload, lng, namespaces) => {
    let newPayload = { [lng]: {} }

    payload.forEach(res => Object.assign(
      newPayload[lng],
      {
        [res.fields.slug]: {
          ...res.fields
        }
      })
    )
    return newPayload
  }
}

i18n
  .use(LanguageDetector)
  .use(BackendAdapter)
  .use(initReactI18next)
  .init({
    detection: detectionOptions,
    backend: {
      backend: BackendMultLoadPath,
      backendOption: backEndOptions
    },
    fallbackLng,
    keySeparator: false,
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    ns: ['people', 'commons'],
    defaultNS: 'people',
  });

window.i18n = i18n
export default i18n;
