import React, { useState } from 'react';
import { getVerificationReq } from '../services/ReclaimService';

function IdentityForm() {
  const [identityData, setIdentityData] = useState({
    name: '',
    email: '',
    verificationMethod: ''
  });
  const [verificationLink, setVerificationLink] = useState('');
  const [verificationStatus, setVerificationStatus] = useState('');

  const handleChange = (e) => {
    setIdentityData({
      ...identityData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { requestUrl, statusUrl } = await getVerificationReq();
      setVerificationLink(requestUrl);
      setVerificationStatus('Pending'); // Assume status is pending after initiating request
      // Add logic to periodically check the statusUrl and update verificationStatus accordingly
    } catch (error) {
      console.error('Error initiating verification:', error);
      // Handle error if needed
    }
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
      {verificationLink && (
        <div>
          <p>Verification Link:</p>
          <a href={verificationLink} target="_blank" rel="noopener noreferrer">{verificationLink}</a>
        </div>
      )}
      {verificationStatus && (
        <p>Verification Status: {verificationStatus}</p>
      )}
    </div>
  );
}

export default IdentityForm;
