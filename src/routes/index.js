import {
  Application
} from 'components';

import {
  SignInPage,
  PageNotFound
} from 'pages';

const routes = [
  {
    component: Application,
    routes: [
      {path: '/', exact: true, component: SignInPage},
      {path: '*', exact: true, component: PageNotFound}
    ]
  }
];

export default routes;
