import React, { useState } from "react";
import VehicleDetails from "./VehicleDetails";
import DriverDetails from "./DriverDetails";
import InsuranceOptions from "./InsuranceOptions";
import Summary from "./Summary";
import StartPage from "./StartPage";
import MultiStepProgressBar from "./MultiStepProgressBar";
import "./form.css";

const UserForm = () => {
  const [page, setPage] = useState(1);
  const [userInput, setUserInput] = useState({
    vehicleMake: "",
    vehicleModel: "",
    vehicleLeased: false,
    vehicleGarage: false,
    vehiclePurchaseYear: "",
    vehicleAnnualMileage: "",
    vehicleSpecialUsage: "",
    driverDOB: "",
    driverUser: "",
    driverGender: "",
    driverPostalCode: "",
    driverNationality: "",
    vehicleMainDriver: "",
    insuranceType: ""
  });

  const nextStep = () => {
    setPage((currPage) => currPage + 1);
  };

  const handleChange = (input) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setUserInput({ ...userInput, [input]: value });
  };

  const start = () => {
    setPage(1);
  };

  const PageDisplay = () => {
    switch (page) {
      case 1:
        return <VehicleDetails nextStep={nextStep} handleChange={handleChange} />;
      case 2:
        return <DriverDetails nextStep={nextStep} handleChange={handleChange} />;
      case 3:
        return <InsuranceOptions nextStep={nextStep} handleChange={handleChange} />;
      case 4:
        return <Summary userInput={userInput} />;
     
    }
  };

  return (
    <div className="userForm">
      {page > 0 && (
        <div style={{ margin: "auto", width: "50%" }}>
          <MultiStepProgressBar step={page - 1} />
        </div>
      )}
      <div className="userForm-container">
        {page > 0 && (
          <div className="userForm-container-header">
            <h1>{page === 4 ? `Zusammenfassung` : `Schritt ${page}`}</h1>
          </div>
        )}
        <div className="userForm-container-body">{PageDisplay()}</div>
      </div>
    </div>
  );
};

export default UserForm;
