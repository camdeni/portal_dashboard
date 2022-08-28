import React from 'react';
import style from './Auth.module.scss';
import classname from 'classnames';
import InputField from './InputField';
import { useFormik } from 'formik';
import { loginSchema } from './ValidationSchema';

const Login = () => {
  const formik = useFormik({
    initialValues: { phoneNumber: '', password: '' },
    validationSchema: loginSchema,
    onSubmit: () => {},
  });

  return (
    <div
      className={classname(
        style.login,
        'h-screen bg-white flex justify-center flex-col'
      )}
    >
      <div className={classname('text-white font-bold z-10', style.appName)}>
        Camveni
      </div>
      <div
        className={classname(
          'relative m-auto bg-white rounded-xl z-10',
          style.container
        )}
      >
        <div className={classname(style.heading, 'text-black font-bold')}>
          Login
        </div>
        <div className={classname('relative', style.form)}>
          <form onSubmit={formik.handleSubmit}>
            <InputField
              name="phoneNumber"
              placeholder="Phone Number"
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
              type="text"
            />
            <InputField
              name="password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
              type="password"
            />
            <button
              className={classname(
                'btn btn-primary capitalize text-white rounded-xl  outline-none focus:outline-none bg-primary border-none hover:bg-primary',
                style.loginBtn
              )}
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
