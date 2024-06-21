// StartPage.js
import React from 'react';
import './startPage.css'; // Importiere die CSS-Datei für das Styling der Startseite

const StartPage = ({ start }) => {
  return (
    <div className="startPage">
      <div className="startPage-content">
        <h1>Auto Versicherungsprämie</h1>
        <p>schnell und einfach Ihre Versicherungsprämie berechnen</p>
        <button className="startPage-button" onClick={start}>Jetzt berechnen</button>
      </div>
    </div>
  );
};

export default StartPage;
