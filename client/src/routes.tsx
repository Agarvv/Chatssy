import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from './features/auth/login/LoginForm'
import RegisterForm from './features/auth/register/RegisterForm'

export const AppRoutes = () => (
  <Router>
     <Routes>
         <Route path="/register" element={ <RegisterForm /> }/> 
         <Route path="/login" element={ <LoginForm />}/> 
     </Routes>
  </Router> 
)