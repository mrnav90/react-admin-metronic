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

export function ucFirstAllWords(str) {
  const pieces = str.split(' ');
  for (let i = 0; i < pieces.length; i++) {
    const j = pieces[i].charAt(0).toUpperCase();
    pieces[i] = j + pieces[i].substr(1);
  }
  return pieces.join(' ');
}
