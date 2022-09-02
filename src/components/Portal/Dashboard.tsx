import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GenericEnum } from 'src/utils/Enums';
import useAuth from 'src/hooks/useAuth';
import Layout from 'src/components/Shared/PortalLayout';

const Dashboard = () => {
  const { me } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem(GenericEnum.Token);
    navigate('/', { replace: true });
  };

  return (
    <Layout pageTitle={{ title: 'Dashboard' }}>
      <h1>Welcome</h1>
    </Layout>
  );
};
export default Dashboard;
