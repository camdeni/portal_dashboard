import React from 'react';
import useAuth from 'src/hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { ProtectedRouteProps } from 'src/__types__/Routes';

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const auth = useAuth();

  if (
    typeof auth.loading === 'undefined' ||
    typeof auth.isAuth === 'undefined'
  ) {
    return <>wait ...</>;
  }
  if (auth.loading) {
    return <>Loading ...</>;
  }

  if (auth.loading === false && auth.isAuth === false) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};
export default ProtectedRoute;
