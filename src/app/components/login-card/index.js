import React from 'react';
import { LocalSessionKey } from '../../constants/app-constants';
import { PathConstants } from '../../constants/path-constants';

import './index.scss'

const LoginCard = ({ history }) => {
  const onLogin = () => {
    localStorage.setItem(LocalSessionKey.IS_LOGGED_IN, true);
    history.push(PathConstants.HOME);
  }

  return (
    <div className="login-card">
      <h1 className="login-card__title">Enter your credentials</h1>
      <label className="login-card__label">Email Id
        <input className="login-card__input"></input>
      </label>
      <label className="login-card__label">Password
        <input className="login-card__input" type="password"></input>
      </label>
      <input className="login-card__btn" type="submit" value="Login" onClick={() => onLogin()}></input>
    </div>
  );
}

export default LoginCard;
