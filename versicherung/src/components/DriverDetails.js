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
