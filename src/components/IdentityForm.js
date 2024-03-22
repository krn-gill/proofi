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
    <div>
      <h2>Request Identity Verification</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={identityData.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={identityData.email} onChange={handleChange} />
        </label>
        <label>
          Verification Method:
          <select name="verificationMethod" value={identityData.verificationMethod} onChange={handleChange}>
            <option value="">Select Method</option>
            <option value="IITB">IIT Bombay</option>
            <option value="Aadhar">Aadhar</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default IdentityForm;
