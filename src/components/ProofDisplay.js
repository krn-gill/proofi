import React from 'react';

const ProofDisplay = ({ proofs }) => {
  // Check if proofs exist
  if (!proofs || proofs.length === 0) {
    return <div>No verified proofs yet.</div>;
  }

  return (
    <div>
      <h2>Verified Proofs:</h2>
      <ul>
        {proofs.map((proof, index) => (
          <li key={index}>
            {/* Assuming extractedParameterValues is the object you received */}
            {Object.entries(proof.extractedParameterValues).map(
              ([key, value]) => (
                <div key={key}>
                  <strong>{key}:</strong> {value}
                </div>
              )
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProofDisplay;
