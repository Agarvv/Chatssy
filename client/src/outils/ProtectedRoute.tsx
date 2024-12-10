import React, { ReactNode, useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axiosInstance from 'src/config/axiosConfig';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [auth, setAuth] = useState<boolean | null>(null); 
  const [error, setError] = useState<any>(null);  

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
      });
  }, []);

  if (error || !auth) {
    return <Navigate to="/login" replace />;  
  }

  return <>{children}</>;  
};

export default ProtectedRoute;