import React from "react";
import "./form.css"; 
const Summary = ({ userInput }) => {
  const calculatePremium = (userInput) => {
    let basePremium = 0; 

  
   
    if (userInput.vehicleMake === "Mercedes" || userInput.vehicleMake === "BMW") {
      basePremium += 100;
    }

    const currentYear = new Date().getFullYear();
    const vehicleAge = currentYear - userInput.vehiclePurchaseYear;
    basePremium += vehicleAge * 2; 


    switch (userInput.vehicleAnnualMileage) {
      case "SEHR WENIG (BIS 5'000 KM)":
        basePremium += 10;
        break;
      case "WENIG (BIS 10'000 KM)":
        basePremium += 50;
        break;
      case "MITTEL (BIS 15'000 KM)":
        basePremium += 75;
        break;
      case "VIEL (BIS 20'000 KM)":
        basePremium += 100;
        break;
      case "SEHR VIEL (MEHR ALS 20'000 KM)":
        basePremium += 1000;
        break;
      default:
        break;
    }


    const driverAge = currentYear - new Date(userInput.driverDOB).getFullYear();
    if (driverAge < 25) {
      basePremium += 100;
    } else if (driverAge > 60) {
      basePremium += 50;
    }


    if (userInput.insuranceType === "Vollkasko") {
      basePremium *= 1.5;
    } else if (userInput.insuranceType === "Teilkasko") {
      basePremium *= 1.2;
    }


    if (userInput.vehicleLeased) {
      basePremium += 50;
    }
    if (!userInput.vehicleGarage) {
      basePremium += 50;
    }


    if (userInput.driverGender === "MANN") {
      basePremium += 20; 
    } else if (userInput.driverGender === "FRAU") {
      basePremium -= 20; 
    }

    if (userInput.driverNationality === "ANDERES LAND") {
      basePremium += 1000;
    }

    if (userInput.vehicleMainDriver === "EINE ANDERE PERSON") {
      basePremium += 40; 
    }

    return basePremium;
  };
  function handleButtonClick() {
    console.log(userInput);
      window.location.href = '/';
  }

  const premium = calculatePremium(userInput);

  return (
    <div className="step-form-container">
      <h2>Zusammenfassung</h2>
      <p>Fahrzeugmarke: {userInput.vehicleMake}</p>
      <p>Modell: {userInput.vehicleModel}</p>
      <p>Geleast: {userInput.vehicleLeased ? 'Ja' : 'Nein'}</p>
      <p>Garage: {userInput.vehicleGarage ? 'Ja' : 'Nein'}</p>
      <p>Kaufjahr: {userInput.vehiclePurchaseYear}</p>
      <p>Jährliche Kilometerleistung: {userInput.vehicleAnnualMileage}</p>
      <p>Spezielle Nutzung: {userInput.vehicleSpecialUsage}</p>
      <p>Geburtsdatum: {userInput.driverDOB}</p>
      <p>Auf wen soll das Fahrzeug versichert werden? {userInput.driverUser}</p>
      <p>Geschlecht: {userInput.driverGender}</p>
      <p>Postleitzahl des Wohnorts: {userInput.driverPostalCode}</p>
      <p>Nationalität: {userInput.driverNationality}</p>
      <p>Hauptnutzer des Fahrzeugs: {userInput.vehicleMainDriver}</p>
      <p>Art der Versicherung: {userInput.insuranceType}</p>
      <p><strong>Berechnete Prämie: {premium.toFixed(2)} €</strong></p>
      <button onClick={handleButtonClick}>Versicherung abschließen</button>
    </div>
  );
};

export default Summary;
