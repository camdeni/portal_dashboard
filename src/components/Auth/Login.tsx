import React from 'react';
import style from './Auth.module.scss';
import classname from 'classnames';
import InputField from './InputField';
import { useFormik } from 'formik';
import { loginSchema } from './ValidationSchema';
import { useMutation } from '@tanstack/react-query';
import axios from 'src/utils/AxiosSetup';
import { apiEndpoints } from 'src/utils/ApiEndpoints';
import { LoginArgs } from 'src/__types__/Auth';
import { GenericEnum } from 'src/utils/Enums';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [error, setError] = React.useState<string>();

  const navigate = useNavigate();

  const loginMutation = useMutation((values: LoginArgs) =>
    axios.post(apiEndpoints.login, values)
  );

  const formik = useFormik({
    initialValues: { phone_number: '', password: '' },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      setError(undefined);
      return loginMutation.mutate(values);
    },
    validateOnChange: false,
  });

  React.useEffect(() => {
    const dataError: any = loginMutation.error;
    if (dataError && dataError.response && dataError.response.data) {
      setError(dataError.response.data.message);
    }
  }, [loginMutation.error]);

  React.useEffect(() => {
    if (loginMutation.data && loginMutation.data.data.token) {
      localStorage.setItem(GenericEnum.Token, loginMutation.data.data.token);
      navigate('/dashboard', { replace: true });
    }
  }, [loginMutation.data, navigate]);

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
              name="phone_number"
              placeholder="Phone Number"
              onChange={formik.handleChange}
              value={formik.values.phone_number}
              type="text"
              error={formik.errors.phone_number}
            />
            <InputField
              name="password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
              type="password"
              error={formik.errors.password}
            />
            {error && (
              <div className="w-full">
                <span className="text-xs text-red-600 font-bold">{error}</span>
              </div>
            )}
            <button
              className={classname(
                'btn btn-primary capitalize text-white outline-none focus:outline-none bg-primary border-none hover:bg-primary',
                style.loginBtn,
                loginMutation.isLoading && style.loginBtnLoading
              )}
              type="submit"
              disabled={loginMutation.isLoading}
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
