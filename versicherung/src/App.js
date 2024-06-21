
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 


import StartPage from './components/StartPage';
import AboutUs from './components/aboutus';
import UserForm from './components/UserForm'; 

import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
      <Route path="/about" element={<AboutUs />} />
        <Route path="/userform" element={<UserForm />} />
        <Route path="/" element={<StartPage />} />
      </Routes>
    </Router>
  );
}
