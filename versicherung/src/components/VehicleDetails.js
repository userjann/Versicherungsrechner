import React, { useState, useRef, useEffect } from "react";
import fetchJsonp from "fetch-jsonp";
import "./form.css";

const VehicleDetails = ({ nextStep, handleChange }) => {
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState("");
  const [isLeased, setIsLeased] = useState(null);
  const [hasGarage, setHasGarage] = useState(null);
  const [purchaseYear, setPurchaseYear] = useState("");
  const [annualMileage, setAnnualMileage] = useState("");
  const [specialUsage, setSpecialUsage] = useState("");
  const brandInputRef = useRef(null);

  const fetchModels = async () => {
    try {
      const response = await fetchJsonp(`https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModels&make=${brandInputRef.current.value}`);
      const jsonpData = await response.json();
      setModels(jsonpData.Models);
      setSelectedModel(""); 
    } catch (error) {
      console.error("Error fetching models:", error);
    }
  };

  useEffect(() => {
    if (brandInputRef.current && brandInputRef.current.value) {
      fetchModels();
    }
  }, [brandInputRef.current?.value]);

  const handleModelChange = (e) => {
    setSelectedModel(e.target.value);
    handleChange("vehicleModel")(e);
  };

  const handleLeaseClick = (leaseStatus) => {
    setIsLeased(leaseStatus);
    handleChange("vehicleLeased")({ target: { value: leaseStatus } });
  };

  const handleGarageClick = (garageStatus) => {
    setHasGarage(garageStatus);
    handleChange("vehicleGarage")({ target: { value: garageStatus } });
  };

  const handlePurchaseYearChange = (e) => {
    setPurchaseYear(e.target.value);
    handleChange("vehiclePurchaseYear")(e);
  };

  const handleAnnualMileageClick = (mileage) => {
    setAnnualMileage(mileage);
    handleChange("vehicleAnnualMileage")({ target: { value: mileage } });
  };

  const handleSpecialUsageClick = (usage) => {
    setSpecialUsage(usage);
    handleChange("vehicleSpecialUsage")({ target: { value: usage } });
  };

  return (
    <div>
      <h2>Fahrzeugdetails</h2>
      <label>
        Fahrzeugmarke:
        <input
          type="text"
          ref={brandInputRef}
          onBlur={fetchModels}
          onChange={handleChange("vehicleMake")}
        />
      </label>
      <br />
      <label>
        Modell:
        <select value={selectedModel} onChange={handleModelChange}>
          <option value="">-- Modell wählen --</option>
          {models.map((model) => (
            <option key={model.model_name} value={model.model_name}>
              {model.model_name}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Geleast:
        <div>
          <button
            onClick={() => handleLeaseClick(true)}
            style={{
              backgroundColor: isLeased === true ? "#8a1c1c" : "#fff",
              color: isLeased === true ? "#fff" : "#000",
            }}
          >
            Ja
          </button>
          <button
            onClick={() => handleLeaseClick(false)}
            style={{
              backgroundColor: isLeased === false ? "#8a1c1c" : "#fff",
              color: isLeased === false ? "#fff" : "#000",
            }}
          >
            Nein
          </button>
        </div>
      </label>
      <br />
      <label>
        Garage:
        <div>
          <button
            onClick={() => handleGarageClick(true)}
            style={{
              backgroundColor: hasGarage === true ? "#8a1c1c" : "#fff",
              color: hasGarage === true ? "#fff" : "#000",
            }}
          >
            Ja
          </button>
          <button
            onClick={() => handleGarageClick(false)}
            style={{
              backgroundColor: hasGarage === false ? "#8a1c1c" : "#fff",
              color: hasGarage === false ? "#fff" : "#000",
            }}
          >
            Nein
          </button>
        </div>
      </label>
      <br />
      <label>
        Kaufjahr:
        <select value={purchaseYear} onChange={handlePurchaseYearChange}>
          <option value="">-- Jahr wählen --</option>
          {Array.from({ length: 30 }, (_, index) => new Date().getFullYear() - index).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Wie viele Kilometer fährt das Fahrzeug pro Jahr?
        <div>
          {[
            "SEHR WENIG (BIS 5'000 KM)",
            "WENIG (BIS 10'000 KM)",
            "MITTEL (BIS 15'000 KM)",
            "VIEL (BIS 20'000 KM)",
            "SEHR VIEL (MEHR ALS 20'000 KM)"
          ].map((mileage) => (
            <button
              key={mileage}
              onClick={() => handleAnnualMileageClick(mileage)}
              style={{
                backgroundColor: annualMileage === mileage ? "#8a1c1c" : "#fff",
                color: annualMileage === mileage ? "#fff" : "#000",
              }}
            >
              {mileage}
            </button>
          ))}
        </div>
      </label>
      <br />
      <label>
        Wird dieses Fahrzeug speziell genutzt?
        <div>
          <button
            onClick={() => handleSpecialUsageClick("JA")}
            style={{
              backgroundColor: specialUsage === "JA" ? "#8a1c1c" : "#fff",
              color: specialUsage === "JA" ? "#fff" : "#000",
            }}
          >
            JA
          </button>
          <button
            onClick={() => handleSpecialUsageClick("NEIN")}
            style={{
              backgroundColor: specialUsage === "NEIN" ? "#8a1c1c" : "#fff",
              color: specialUsage === "NEIN" ? "#fff" : "#000",
            }}
          >
            NEIN
          </button>
        </div>
      </label>
      <br />
      <button onClick={nextStep}>Weiter</button>
    </div>
  );
};

export default VehicleDetails;
