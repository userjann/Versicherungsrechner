import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import styles from './startPage.module.css'; 
import Navbar from './navbar';

const StartPage = () => {
  const navigate = useNavigate(); 

  const start = () => {
    navigate('/userform');
  };

  return (
    <div>
      <Navbar />
      <div className={styles.startPage}> 
        <div className={styles['startPage-content']}>
          <h1>Auto Versicherungsprämie</h1>
          <p>schnell und einfach Ihre Versicherungsprämie berechnen</p>
          <button className={`${styles['startPage-button']} form-button`} onClick={start}>Jetzt berechnen</button>
          <h7>achtung die berechnete Prämie stimmt nicht</h7>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
