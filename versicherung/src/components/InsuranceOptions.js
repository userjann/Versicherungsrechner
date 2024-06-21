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
      
      <div>
        
        <button
          onClick={() => handleInsuranceTypeClick("Vollkasko")}
          style={{
            backgroundColor: insuranceType === "Vollkasko" ? "#8a1c1c" : "#fff",
            color: insuranceType === "Vollkasko" ? "#fff" : "#000",
          }}
        >
          mit Vollkasko
        </button>
        <p>Versichert Ihr Fahrzeug rundum, inkl. Schäden durch Zusammenstoss (z. B. in Pfosten gefahren)</p>
        
        <button
          onClick={() => handleInsuranceTypeClick("Teilkasko")}
          style={{
            backgroundColor: insuranceType === "Teilkasko" ? "#8a1c1c" : "#fff",
            color: insuranceType === "Teilkasko" ? "#fff" : "#000",
          }}
        >
          mit Teilkasko
        </button>
        <p>Versichert Ihr Fahrzeug gegen Schäden, für die Sie nichts können (Hagel, Marder, Feuer, ...)</p>
        
        <button
          onClick={() => handleInsuranceTypeClick("Haftpflicht")}
          style={{
            backgroundColor: insuranceType === "Haftpflicht" ? "#8a1c1c" : "#fff",
            color: insuranceType === "Haftpflicht" ? "#fff" : "#000",
          }}
        >
          mit Haftpflicht
        </button>
        <p>Schäden am eigenen Fahrzeug tragen Sie selbst (nur obligatorische Haftpflicht versichern)</p>
      </div>
      
      <button onClick={nextStep}>Weiter</button>
    </div>
  );
};

export default InsuranceOptions;
