// src/components/IdentityForm.js
import React, { useState } from 'react';

function IdentityForm() {
  const [identityData, setIdentityData] = useState({
    name: '',
    email: '',
    verificationMethod: ''
  });

  const handleChange = (e) => {
    setIdentityData({
      ...identityData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to submit identity verification request
  };

  return (
    <div className="container mt-5">
      <h2>Request Identity Verification</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" className="form-control" id="name" name="name" value={identityData.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" className="form-control" id="email" name="email" value={identityData.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="verificationMethod" className="form-label">Verification Method:</label>
          <select className="form-select" id="verificationMethod" name="verificationMethod" value={identityData.verificationMethod} onChange={handleChange}>
            <option value="">Select Method</option>
            <option value="IITB">IIT Bombay</option>
            <option value="Aadhar">Aadhar</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default IdentityForm;
