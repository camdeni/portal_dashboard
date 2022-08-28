import React from 'react';
import style from './Auth.module.scss';
import classname from 'classnames';

const Login = () => {
  return (
    <div className={classname(style.login)}>
      <h1>Login</h1>
    </div>
  );
};
export default Login;
