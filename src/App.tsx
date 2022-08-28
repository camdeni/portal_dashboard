import React from 'react';
import MainRoute from 'src/components/Routes/MainRoutes';
import { AuthContext } from 'src/contexts/Auth';
import useMe from 'src/hooks/useMe';

const App = () => {
  const { loading, isAuth, me } = useMe();

  return (
    <AuthContext.Provider value={{ loading, isAuth, me }}>
      <MainRoute />
    </AuthContext.Provider>
  );
};

export default App;
