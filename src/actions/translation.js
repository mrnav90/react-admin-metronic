import {I18n} from 'react-i18nify';
import {ACTION_TYPES, DEFAULT_LANGUAGE, I18N_DATA} from 'constants';
import {getLanguage} from 'utils';

export function translations() {
  return dispatch => {
    dispatch({
      type: ACTION_TYPES.LOAD_TRANSLATIONS,
      translations: I18N_DATA
    });
    I18n.forceComponentsUpdate();
  };
}

export function preferredLanguage() {
  return dispatch => {
    dispatch({
      type: ACTION_TYPES.SET_DEFAULT_LANGUAGE,
      locale: getLanguage() ? getLanguage() : DEFAULT_LANGUAGE
    });
    I18n.forceComponentsUpdate();
  };
}

export function changeLanguage(locale) {
  return dispatch => {
    dispatch({
      type: ACTION_TYPES.CHANGE_LANGUAGE,
      locale: locale
    });
    I18n.forceComponentsUpdate();
  };
}
