import React, { useState, useRef } from 'react';
import fetchJsonp from 'fetch-jsonp';


const InsuranceForm = ({ calculateInsurance }) => {
  const [formData, setFormData] = useState({
    carMake: '',
    carModel: '',
    carYear: '',
    driverAge: '',
    coverageType: 'basic',
    usage: 'private',
    leased: false,
    garage: false,
    kilometersDriven: '',
    canton: '',
    gender: 'male'
  });
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState('');
  const brandInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });

    if (name === 'carMake') {
      if (value === '') {
        setModels([]); // Clear models if carMake is empty
        setSelectedModel(''); // Clear selected model
      } else {
        fetchModels(value);
      }
    }
  };

  const fetchModels = async (make) => {
    try {
      const response = await fetchJsonp(`https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModels&make=${make}`);
      const jsonpData = await response.json();
      setModels(jsonpData.Models || []); // Ensure models is an array
    } catch (error) {
      console.error('Fehler beim Laden der Automodelle:', error);
      setModels([]); // Clear models in case of error
    }
  };

  const handleModelClick = (model) => {
    setFormData({
      ...formData,
      carModel: model
    });
    setSelectedModel(model); // Set the selected model
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateInsurance(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="insurance-form">
      <div className="form-group">
        <label>Marke des Autos:</label>
        <input type="text" name="carMake" ref={brandInputRef} value={formData.carMake} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Modell des Autos:</label>
        <div>
          {selectedModel ? (
            <button type="button" className="selected">{selectedModel}</button>
          ) : models.length > 0 ? (
            models.map((model) => (
              <button
                key={model.model_id}
                type="button"
                onClick={() => handleModelClick(model.model_name)}
                className={formData.carModel === model.model_name ? 'selected' : ''}
              >
                {model.model_name}
              </button>
            ))
          ) : (
            <p>Bitte geben Sie eine Automarke ein, um die Modelle anzuzeigen.</p>
          )}
        </div>
      </div>
      <div className="form-group">
        <label>Baujahr des Autos:</label>
        <input type="number" name="carYear" value={formData.carYear} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Alter des Fahrers:</label>
        <input type="number" name="driverAge" value={formData.driverAge} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Wofür wird das Auto benutzt:</label>
        <label>
          <input type="radio" name="usage" value="private" checked={formData.usage === 'private'} onChange={handleChange} />
          Privat
        </label>
        <label>
          <input type="radio" name="usage" value="business" checked={formData.usage === 'business'} onChange={handleChange} />
          Geschäftlich
        </label>
      </div>
      <div className="form-group">
        <label>
          <input type="checkbox" name="leased" checked={formData.leased} onChange={handleChange} />
          Auto ist geleast
        </label>
        <label>
          <input type="checkbox" name="garage" checked={formData.garage} onChange={handleChange} />
          mit Garage
        </label>
      </div>
      <div className="form-group">
        <label>Gefahrene Kilometer:</label>
        <input type="number" name="kilometersDriven" value={formData.kilometersDriven} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Zugelassener Kanton:</label>
        <input type="text" name="canton" value={formData.canton} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Geschlecht:</label>
        <label>
          <input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} />
          Männlich
        </label>
        <label>
          <input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} />
          Weiblich
        </label>
      </div>
      <button type="submit">Berechnen</button>
    </form>
  );
};

export default InsuranceForm;
