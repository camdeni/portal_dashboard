import React from 'react';
import MainRoute from 'src/components/Routers/MainRoutes';
import { AuthContext } from 'src/contexts/Auth';
import useMe from 'src/hooks/useMe';

const App = () => {
  const { loading, isAuth } = useMe();

  return (
    <AuthContext.Provider value={{ loading, isAuth }}>
      <MainRoute />
    </AuthContext.Provider>
  );
};

export default App;
