import {
  Application
} from 'components';

import {
  SignInPage,
  SignUpPage,
  RequestPasswordPage,
  ResetPasswordPage,
  PageNotFound,
  DashboardPage,
  MyProfilePage
} from 'pages';

const routes = [
  {
    component: Application,
    routes: [
      {path: '/dashboard', exact: true, component: DashboardPage},
      {path: '/my-profile', exact: true, component: MyProfilePage},
      {path: '/', exact: true, component: SignInPage},
      {path: '/sign-up', exact: true, component: SignUpPage},
      {path: '/request-password', exact: true, component: RequestPasswordPage},
      {path: '/reset-password/:token', exact: true, component: ResetPasswordPage},
      {path: '*', exact: true, component: PageNotFound}
    ]
  }
];

export default routes;
