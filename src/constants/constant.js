import langEn from 'i18n/en.json';
import langJa from 'i18n/ja.json';

const REQUEST_HEADER = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};
const I18N_DATA = {
  en: langEn,
  ja: langJa
};
const DEFAULT_LANGUAGE = 'en';

export {
  REQUEST_HEADER,
  I18N_DATA,
  DEFAULT_LANGUAGE
};
