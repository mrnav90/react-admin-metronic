import {translate, translationWithStore} from './translation';

export {
  translationWithStore,
  translate
};

export {
  setUserInfo,
  getUserInfo,
  setAccessToken,
  getAccessToken,
  isAuthenticated,
  revokeUser,
  setLanguage,
  getLanguage,
  setCSRFToken,
  getCSRFToken
} from './store';

export function setPageTitle(title, isTranslate = true) {
  if (isTranslate) {
    document.title = translate(title);
  } else {
    document.title = title;
  }
}
