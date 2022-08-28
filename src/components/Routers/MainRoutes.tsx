import React from 'react';
import Login from 'src/components/Auth/Login';
import { Routes, Route } from 'react-router-dom';

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};
export default MainRoute;
