import React from 'react';
import {BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import LoginPage from './pages/authPages/login/LoginPage';
import RegisterPage from './pages/authPages/register/RegisterPage';
import Dashboard from './pages/dashboard/Dashboard';
import './App.css';
import AlertNotification from './components/AlertNotification';

function App() {
  return <>
  <Router>
    <Routes>
        <Route exact path='/login' element={<LoginPage/>} />
        <Route exact path='/register' element={<RegisterPage/>} />
        <Route exact path='/dashboard' element={<Dashboard/>} />
        <Route path='/' element={<Navigate replace to="/dashboard" />} />
    </Routes>
  </Router>
  <AlertNotification />
  </>;
}

export default App;
