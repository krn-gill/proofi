import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import { buildProofRequest, requestVerification } from '../../services/ReclaimService';

const ProofRequest = () => {
    const [providerId, setProviderId] = useState('');
    const [requestUrl, setRequestUrl] = useState(null);

    const handleVerification = async () => {
        const proofRequest = await buildProofRequest(providerId);
        const url = await requestVerification(proofRequest);
        setRequestUrl(url);
    };

    return (
        <div className="container mt-5">
            <div className="mb-3 d-flex align-items-center">
                <select className="form-select me-3" value={providerId} onChange={(e) => setProviderId(e.target.value)}>
                    <option value="">Select Provider</option>
                    <option value="aadhar">Aadhar</option>
                    {/* Add more providers */}
                </select>
                <button className="btn btn-primary" onClick={handleVerification}>Request Verification</button>
            </div>
            {requestUrl && <QRCode value={requestUrl} />}
        </div>
    );
};

export default ProofRequest;
