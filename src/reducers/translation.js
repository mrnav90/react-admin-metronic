import {ACTION_TYPES} from 'constants';

export default (state = {}, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOAD_TRANSLATIONS:
      return {
        ...state,
        translations: action.translations
      };
    case ACTION_TYPES.SET_DEFAULT_LANGUAGE:
    case ACTION_TYPES.CHANGE_LANGUAGE:
      return {
        ...state,
        locale: action.locale
      };
    default:
      return state;
  }
};
