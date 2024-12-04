import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const CaptainLogout = () => {
    const token = localStorage.getItem('token')
    const navigate=useNavigate();

    useEffect(() => {
      const logoutCaptain=async()=>{
        try {
            const response = await axios.get(
              `${import.meta.env.VITE_BASE_URL}/captains/logout`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
    
            if (response.status === 200) {
              localStorage.removeItem('token'); // Remove the token after successful logout
              navigate('/captain-login'); // Navigate to login page
            }
          } catch (error) {
            console.error('Error logging out:', error);
      }
    
      }
    }, [token,navigate])
    
  return (
    <div>CaptainLogout</div>
  )
}

export default CaptainLogout