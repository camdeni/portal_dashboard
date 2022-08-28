import React from 'react';
import Login from 'src/components/Auth/Login';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Portal/Dashboard';

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  );
};
export default MainRoute;
