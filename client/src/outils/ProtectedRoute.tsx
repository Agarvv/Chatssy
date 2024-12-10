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
      console.log('verifyinh auth...')
    axiosInstance.get('/auth/check/', {
        withCredentials: true 
    })
      .then((response) => {
          console.log("response succeded", response.data)
          if(response.data.message === 'OK') {
              console.log("authenticated")
              setAuth(true) 
          } else {
              console.log('not authenticated')
          }
      })
      .catch((error) => {
        console.log('error ocurred', error)
        setAuth(false);  
        setError(error);
      });
  }, []);

  if (error || !auth) {
      console.log('error', error)
      console.log('is auth', auth)
      return <Navigate to="/login" replace />;  
  }

  return <>{children}</>;  
};

export default ProtectedRoute;