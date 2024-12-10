import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axiosInstance from 'src/config/axiosConfig'; 

const ProtectedRoute = ({ children }) => {
  const [auth, setAuth] = useState(null); 
  const [error, setError] = useState(null);  

  useEffect(() => {
    axiosInstance.get('/auth/check/')  
      .then((response) => {
        if (response.status === 200) {
          setAuth(true);  
        }
      })
      .catch((error) => {
        setAuth(false);  
        setError(error);
      })
  }, []);

  if (error || !auth) {
    return <Navigate to="/login" replace />;  
  }

  return children;  
};

export default ProtectedRoute;