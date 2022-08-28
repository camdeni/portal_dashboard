import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'src/utils/AxiosSetup';
import { apiEndpoints } from 'src/utils/ApiEndpoints';

const useMe = () => {
  const [isAuth, setIsAuth] = React.useState<boolean>();

  const { error, data, isLoading } = useQuery(['me'], () =>
    axios.get(apiEndpoints.me)
  );

  React.useEffect(() => {
    if (!isLoading && data) {
      setIsAuth(true);
    }
  }, [data, isLoading]);

  React.useEffect(() => {
    const errors: any = error;
    if (
      !isLoading &&
      errors &&
      errors.response &&
      errors.response.status === 401
    ) {
      setIsAuth(false);
    }
  }, [error, isLoading]);

  return {
    loading: isLoading,
    isAuth,
    me: data?.data.data,
  };
};
export default useMe;
