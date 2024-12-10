import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from './features/auth/login/LoginForm'; 
import RegisterForm from './features/auth/register/RegisterForm'; 
import SendResetPasswordUrlForm from './features/auth/send-reset-password-url/SendResetPasswordUrlForm'; 
import ResetPasswordForm from './features/auth/reset-password/ResetPasswordForm'
import HomePage from "./pages/home/HomePage";
import ProtectedRoute from 'src/outils/ProtectedRoute'

export const AppRoutes = () => (
  <Router>
     <Routes>
     {/* AUTH */ } 
     
         <Route path="/register" element={ <RegisterForm /> }/> 
         
         <Route path="/login" element={ <LoginForm />}/> 
         
         <Route path="/send-reset-password" element={ <SendResetPasswordUrlForm/> }/> 
         
         <Route path="/reset-password/:token/:email" element={ <ResetPasswordForm /> }/> 
         
     { /* END OF AUTH */} 

     {/* HOME */ } 
       <Route 
       path='/' 
       element={ 
      <ProtectedRoute> 
       <HomePage /> 
      <ProtectedRoute />
       }
       />
     {/* END OF HOME */ } 
     </Routes>
  </Router> 
)