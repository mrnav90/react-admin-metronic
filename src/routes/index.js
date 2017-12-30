import {
  Application
} from 'components';

import {
  SignInPage,
  SignUpPage,
  RequestPasswordPage,
  RestorePasswordPage,
  PageNotFound
} from 'pages';

const routes = [
  {
    component: Application,
    routes: [
      {path: '/', exact: true, component: SignInPage},
      {path: '/sign-up', exact: true, component: SignUpPage},
      {path: '/request-password', exact: true, component: RequestPasswordPage},
      {path: '/restore-password', exact: true, component: RestorePasswordPage},
      {path: '*', exact: true, component: PageNotFound}
    ]
  }
];

export default routes;
