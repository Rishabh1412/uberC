import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserLogout = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/users/logout`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          localStorage.removeItem('token'); // Remove the token after successful logout
          navigate('/login'); // Navigate to login page
        }
      } catch (error) {
        console.error('Error logging out:', error);
      }
    };

    logoutUser();
  }, [token, navigate]); // Dependencies ensure this runs only on component mount

  return <div>UserLogout</div>;
};

export default UserLogout;
