import React from 'react';
import Login from 'src/components/Auth/Login';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Portal/Dashboard';
import ProtectedRoute from './ProtectedRoute';
import Report from 'src/components/Portal/Report';

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/report"
        element={
          <ProtectedRoute>
            <Report />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
export default MainRoute;
