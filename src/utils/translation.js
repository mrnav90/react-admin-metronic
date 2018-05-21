import {I18n} from 'react-i18nify';
import {translations, preferredLanguage} from 'actions';

export function translationWithStore(store) {
  I18n.setTranslationsGetter(() => {
    return store.getState().i18n.translations;
  });
  I18n.setLocaleGetter(() => {
    return store.getState().i18n.locale;
  });
  store.dispatch(translations());
  store.dispatch(preferredLanguage());
}

export function translate(key, data) {
  return I18n.t(key, data);
}
