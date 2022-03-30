import React from 'react';

import { LogIn } from '../../../pages/client/auth/logIn/LogIn';
import { PasswordRecover } from '../../../pages/client/auth/passwordRecover/PasswordRecover';
import { SignUp } from '../../../pages/client/auth/signUp/SignUp';
import { Home } from '../../../pages/client/common/Home';
import { routerPath } from '../../constants/routerPath';
import { Route as Router } from '../interface/route';

export const router: Router[] = [
  {
    path: routerPath.client.auth.LOG_IN,
    element: <LogIn />,
  },
  {
    path: routerPath.client.auth.PASSWORD_RECOVER,
    element: <PasswordRecover />,
  },
  {
    path: routerPath.client.auth.SIGN_UP,
    element: <SignUp />,
  },
  {
    path: routerPath.client.common.HOME,
    element: <Home />,
  },
];

export const allRouteName = router.map((el) => el.path);
