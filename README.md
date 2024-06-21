# Versicherungsrechner:

Auto Versicherungsprämie Rechner
Übersicht
Dieses Projekt ist eine Webanwendung, die Benutzern hilft, schnell und einfach ihre Autoversicherungsprämien zu berechnen. Es führt den Benutzer durch eine Reihe von Formularen, um die notwendigen Informationen über ihr Fahrzeug, ihre Fahrgewohnheiten und persönliche Details zu sammeln. Basierend auf den eingegebenen Daten berechnet es die Versicherungsprämie und zeigt das Ergebnis an.

Inhaltsverzeichnis
Verwendete Technologien
Einrichtung und Installation
Komponenten
StartPage
AboutUs
DriverDetails
InsuranceOptions
Summary
VehicleDetails
UserForm
MultiStepProgressBar
Navbar
Ablauf
Bekannte Probleme
Verwendete Technologien
React
React Router
CSS Module
JSONP
Einrichtung und Installation
Klonen Sie das Repository:
bash

Navigieren Sie in das Projektverzeichnis:
bash

cd auto-versicherungsrechner
Installieren Sie die Abhängigkeiten:
bash

npm install
Starten Sie den Entwicklungsserver:
bash

npm start
Komponenten
StartPage.js
Die StartPage-Komponente dient als Landing Page der Anwendung. Sie enthält eine Navbar und einen Button, der den Benutzer zur UserForm-Komponente navigiert.


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
          <h7>Achtung: die berechnete Prämie ist nicht verbindlich.</h7>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
AboutUs.js
Die AboutUs-Komponente bietet Informationen über die Anwendung oder das Unternehmen. Sie enthält eine Navbar und einen Abschnitt mit Textinhalten.

jsx
Copy code
import React from 'react';
import './aboutus.css';
import Navbar from './navbar';

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="about-us">
        <div className="about-us-content">
          <h1>Über Uns</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
DriverDetails.js
Die DriverDetails-Komponente sammelt Informationen über den Fahrer, wie Geschlecht, Nationalität und Postleitzahl.

import React, { useState } from "react";
import "./form.css";

const DriverDetails = ({ nextStep, handleChange }) => {
  const [driverUser, setDriverUser] = useState("");
  const [driverGender, setDriverGender] = useState("");
  const [driverNationality, setDriverNationality] = useState("");
  const [driverMainUser, setDriverMainUser] = useState("");

  const handleUserClick = (u) => {
    setDriverUser(u);
    handleChange("driverUser")({ target: { value: u } });
  };

  const handleGenderClick = (gender) => {
    setDriverGender(gender);
    handleChange("driverGender")({ target: { value: gender } });
  };

  const handleNationalityChange = (e) => {
    setDriverNationality(e.target.value);
    handleChange("driverNationality")(e);
  };

  const handleMainUserClick = (user) => {
    setDriverMainUser(user);
    handleChange("driverMainUser")({ target: { value: user } });
  };

  return (
    <div>
      <h2>Fahrerdetails</h2>

      <label>
        Geburtsdatum:
        <input type="date" onChange={(e) => handleChange('driverDOB')(e)} />
      </label>
      <br />
      <label>
        Auf wen soll das Fahrzeug versichert werden?
        <div>
          <button
            onClick={() => handleUserClick("PRIVATPERSON")}
            style={{
              backgroundColor: driverUser === "PRIVATPERSON" ? "#8a1c1c" : "#fff",
              color: driverUser === "PRIVATPERSON" ? "#fff" : "#000",
            }}
          >
            PRIVATPERSON
          </button>
          <button
            onClick={() => handleUserClick("UNTERNEHMEN")}
            style={{
              backgroundColor: driverUser === "UNTERNEHMEN" ? "#8a1c1c" : "#fff",
              color: driverUser === "UNTERNEHMEN" ? "#fff" : "#000",
            }}
          >
            UNTERNEHMEN
          </button>
        </div>
      </label>

      <br />
      <label>
        Was ist Ihr Geschlecht?
        <div>
          <button
            onClick={() => handleGenderClick("MANN")}
            style={{
              backgroundColor: driverGender === "MANN" ? "#8a1c1c" : "#fff",
              color: driverGender === "MANN" ? "#fff" : "#000",
            }}
          >
            MANN
          </button>
          <button
            onClick={() => handleGenderClick("FRAU")}
            style={{
              backgroundColor: driverGender === "FRAU" ? "#8a1c1c" : "#fff",
              color: driverGender === "FRAU" ? "#fff" : "#000",
            }}
          >
            FRAU
          </button>
        </div>
      </label>
      <br />
      <label>
        Wie ist die Postleitzahl Ihres Wohnorts?
        <input type="text" onChange={(e) => handleChange('driverPostalCode')(e)} />
      </label>
      <br />
      <label>
        Wie ist Ihre Nationalität?
        <select value={driverNationality} onChange={handleNationalityChange}>
          <option value="">-- Nationalität wählen --</option>
          <option value="SCHWEIZ">SCHWEIZ</option>
          <option value="ANDERES LAND">ANDERES LAND</option>
        </select>
      </label>
      <br />
      <label>
        Wer lenkt das Fahrzeug am meisten?
        <div>
          <button
            onClick={() => handleMainUserClick("ICH SELBST")}
            style={{
              backgroundColor: driverMainUser === "ICH SELBST" ? "#8a1c1c" : "#fff",
              color: driverMainUser === "ICH SELBST" ? "#fff" : "#000",
            }}
          >
            ICH SELBST
          </button>
          <button
            onClick={() => handleMainUserClick("EINE ANDERE PERSON")}
            style={{
              backgroundColor: driverMainUser === "EINE ANDERE PERSON" ? "#8a1c1c" : "#fff",
              color: driverMainUser === "EINE ANDERE PERSON" ? "#fff" : "#000",
            }}
          >
            EINE ANDERE PERSON
          </button>
        </div>
      </label>
      <br />
      <button onClick={nextStep}>Weiter</button>
    </div>
  );
};

export default DriverDetails;
InsuranceOptions.js
Die InsuranceOptions-Komponente ermöglicht es dem Benutzer, den gewünschten Versicherungstyp auszuwählen: Vollkasko, Teilkasko oder Haftpflicht.

jsx
Copy code
import React, { useState } from "react";
import "./form.css";

const InsuranceOptions = ({ nextStep, handleChange }) => {
  const [insuranceType, setInsuranceType] = useState("");

  const handleInsuranceTypeClick = (type) => {
    setInsuranceType(type);
    handleChange("insuranceType")({ target: { value: type } });
  };

  return (
    <div>
      <h2>Versicherungsoptionen</h2>

      <button
        onClick={() => handleInsuranceTypeClick("Haftpflicht")}
        style={{
          backgroundColor: insuranceType === "Haftpflicht" ? "#8a1c1c" : "#fff",
          color: insuranceType === "Haftpflicht" ? "#fff" : "#000",
        }}
      >
        Haftpflicht
      </button>
      <p>Grundlegender Schutz für Schäden, die Sie anderen zufügen.</p>

      <button
        onClick={() => handleInsuranceTypeClick("Vollkasko")}
        style={{
          backgroundColor: insuranceType === "Vollkasko" ? "#8a1c1c" : "#fff",
          color: insuranceType === "Vollkasko" ? "#fff" : "#000",
        }}
      >
        Vollkasko
      </button>
      <p>Umfassender Schutz für Ihr Fahrzeug und andere Schäden.</p>
      
      <button
        onClick={() => handleInsuranceTypeClick("Teilkasko")}
        style={{
          backgroundColor: insuranceType === "Teilkasko" ? "#8a1c1c" : "#fff",
          color: insuranceType === "Teilkasko" ? "#fff" : "#000",
        }}
      >
        Teilkasko
      </button>
      <p>Schutz vor Diebstahl, Feuer und anderen Teilkasko-Schäden.</p>

      <button onClick={nextStep}>Weiter</button>
    </div>
  );
};

export default InsuranceOptions;
Summary.js
Die Summary-Komponente zeigt eine Zusammenfassung der eingegebenen Daten und berechnet die Prämie.

jsx
Copy code
import React from "react";
import "./form.css";

const Summary = ({ formData }) => {
  return (
    <div>
      <h2>Zusammenfassung</h2>
      <p><strong>Geburtsdatum:</strong> {formData.driverDOB}</p>
      <p><strong>Versicherungsnehmer:</strong> {formData.driverUser}</p>
      <p><strong>Geschlecht:</strong> {formData.driverGender}</p>
      <p><strong>Postleitzahl:</strong> {formData.driverPostalCode}</p>
      <p><strong>Nationalität:</strong> {formData.driverNationality}</p>
      <p><strong>Hauptnutzer:</strong> {formData.driverMainUser}</p>
      <p><strong>Versicherungsoption:</strong> {formData.insuranceType}</p>
      <button onClick={() => alert("Ihre Versicherungsprämie beträgt XYZ")}>Prämie berechnen</button>
    </div>
  );
};

export default Summary;
VehicleDetails.js
Die VehicleDetails-Komponente sammelt Informationen über das Fahrzeug, wie Marke, Modell und Baujahr.

jsx
Copy code
import React from "react";
import "./form.css";

const VehicleDetails = ({ nextStep, handleChange }) => {
  return (
    <div>
      <h2>Fahrzeugdetails</h2>

      <label>
        Fahrzeugmarke:
        <input type="text" onChange={(e) => handleChange('vehicleMake')(e)} />
      </label>
      <br />
      <label>
        Fahrzeugmodell:
        <input type="text" onChange={(e) => handleChange('vehicleModel')(e)} />
      </label>
      <br />
      <label>
        Baujahr:
        <input type="number" onChange={(e) => handleChange('vehicleYear')(e)} />
      </label>
      <br />
      <label>
        Kilometerstand:
        <input type="number" onChange={(e) => handleChange('vehicleMileage')(e)} />
      </label>
      <br />
      <button onClick={nextStep}>Weiter</button>
    </div>
  );
};

export default VehicleDetails;
UserForm.js
Die UserForm-Komponente steuert den Ablauf des mehrstufigen Formulars und rendert die entsprechenden Unterkomponenten basierend auf dem aktuellen Schritt.

jsx
Copy code
import React, { useState } from "react";
import DriverDetails from "./DriverDetails";
import VehicleDetails from "./VehicleDetails";
import InsuranceOptions from "./InsuranceOptions";
import Summary from "./Summary";
import MultiStepProgressBar from "./MultiStepProgressBar";
import Navbar from "./navbar";
import "./userform.css";

const UserForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    driverDOB: "",
    driverUser: "",
    driverGender: "",
    driverPostalCode: "",
    driverNationality: "",
    driverMainUser: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleYear: "",
    vehicleMileage: "",
    insuranceType: "",
  });

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  switch (step) {
    case 1:
      return (
        <div>
          <Navbar />
          <MultiStepProgressBar step={step} />
          <DriverDetails nextStep={nextStep} handleChange={handleChange} />
        </div>
      );
    case 2:
      return (
        <div>
          <Navbar />
          <MultiStepProgressBar step={step} />
          <VehicleDetails nextStep={nextStep} handleChange={handleChange} />
        </div>
      );
    case 3:
      return (
        <div>
          <Navbar />
          <MultiStepProgressBar step={step} />
          <InsuranceOptions nextStep={nextStep} handleChange={handleChange} />
        </div>
      );
    case 4:
      return (
        <div>
          <Navbar />
          <MultiStepProgressBar step={step} />
          <Summary formData={formData} />
        </div>
      );
    default:
      return <div>Fehler: Ungültiger Schritt</div>;
  }
};

export default UserForm;
MultiStepProgressBar.js
Die MultiStepProgressBar-Komponente zeigt den Fortschritt des Formulars an.

jsx
Copy code
import React from "react";
import "./multistepprogressbar.css";

const MultiStepProgressBar = ({ step }) => {
  return (
    <div className="progress-bar">
      <div className={`step ${step >= 1 ? "completed" : ""}`}>1</div>
      <div className={`step ${step >= 2 ? "completed" : ""}`}>2</div>
      <div className={`step ${step >= 3 ? "completed" : ""}`}>3</div>
      <div className={`step ${step >= 4 ? "completed" : ""}`}>4</div>
    </div>
  );
};

export default MultiStepProgressBar;
Navbar.js
Die Navbar-Komponente bietet eine Navigationsleiste für die Anwendung.

jsx
Copy code
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Startseite</Link>
        </li>
        <li>
          <Link to="/aboutus">Über Uns</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;



Ablauf
Der Benutzer startet die Anwendung und landet auf der StartPage.
Nach einem Klick auf den "Jetzt berechnen"-Button wird der Benutzer zum UserForm weitergeleitet.
Das UserForm besteht aus mehreren Schritten:
DriverDetails: Sammlung von Informationen über den Fahrer.
VehicleDetails: Sammlung von Informationen über das Fahrzeug.
InsuranceOptions: Auswahl der gewünschten Versicherungsoption.
Summary: Anzeige einer Zusammenfassung der eingegebenen Daten und Berechnung der Prämie.
Der Fortschritt wird durch die MultiStepProgressBar angezeigt.
Jede Komponente ist über eine Navbar erreichbar, die Links zur Startseite und zur Über-uns-Seite enthält.
Bekannte Probleme
Fehlende Validierung der Benutzereingaben.
Die Berechnung der Versicherungsprämie basiert auf Platzhaltern und ist nicht an ein echtes Versicherungsunternehmen angebunden.
