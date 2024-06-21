// StartPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importieren Sie useNavigate aus react-router-dom
import styles from './startPage.module.css'; // CSS-Modul für das Styling der Startseite
import Navbar from './navbar'; // Importiere die Navbar-Komponente

const StartPage = () => {
  const navigate = useNavigate(); // Hook verwenden, um Navigation zu steuern

  const start = () => {
    navigate('/userform'); // Navigiere zur UserForm-Komponente beim Klicken auf den Button
  };

  return (
    <div>
      <Navbar />
      <div className={styles.startPage}> 
        <div className={styles['startPage-content']}>
          <h1>Auto Versicherungsprämie</h1>
          <p>schnell und einfach Ihre Versicherungsprämie berechnen</p>
          <button className={`${styles['startPage-button']} form-button`} onClick={start}>Jetzt berechnen</button>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
