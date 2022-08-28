import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GenericEnum } from 'src/utils/Enums';
import useAuth from 'src/hooks/useAuth';

const Dashboard = () => {
  const { me } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem(GenericEnum.Token);
    navigate('/', { replace: true });
  };

  return (
    <div>
      <h1>Welcome to dashboard - {me && <b>{me.username}</b>}</h1>
      <br />
      <button className="btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
export default Dashboard;
