import React, { useEffect } from 'react';
import LoginCard from '../../components/login-card';

import { LocalSessionKey } from '../../constants/app-constants';
import { PathConstants } from '../../constants/path-constants';

import './index.scss'

const LoginPage = ({ history }) => {
  useEffect(() => {
    if (localStorage.getItem(LocalSessionKey.IS_LOGGED_IN)) {
      history.replace(PathConstants.HOME)
    }
  }, []);

  return (
    <div className="login">
      <LoginCard history={history} />
    </div>
  );
}

export default LoginPage;
