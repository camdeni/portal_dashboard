import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MainRoute from 'src/components/Routers/MainRoutes';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MainRoute />
    </QueryClientProvider>
  );
};

export default App;
