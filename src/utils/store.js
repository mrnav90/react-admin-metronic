import UniversalCookie from 'universal-cookie';

const cookie = new UniversalCookie();

export function setUserInfo(data) {
  cookie.set('userInfo', data);
}

export function getUserInfo() {
  return cookie.get('userInfo');
}

export function setAccessToken(token) {
  cookie.set('token', token);
}

export function getAccessToken() {
  return cookie.get('token');
}

export function setLanguage(key) {
  cookie.set('language', key);
}

export function getLanguage() {
  return cookie.get('language');
}

export function setCSRFToken(token) {
  cookie.set('csrf_token', token);
}

export function getCSRFToken() {
  return cookie.get('csrf_token');
}

export function isAuthenticated() {
  return cookie.get('userInfo') && cookie.get('token');
}

export function revokeUser() {
  cookie.remove('userInfo');
  cookie.remove('token');
  cookie.remove('csrf_token');
}
