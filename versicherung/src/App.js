// Importe für React und React Router
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Verwenden Sie 'Routes' aus react-router-dom

// Importe der Komponenten
import StartPage from './components/StartPage';
import AboutUs from './components/aboutus'; // Importiere die AboutUs Komponente
import UserForm from './components/UserForm'; // Stellen Sie sicher, dass UserForm importiert wird

// CSS-Datei importieren
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
