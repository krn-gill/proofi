import { Reclaim, ProofRequest } from '@reclaimprotocol/js-sdk';

const APP_ID = 'YOUR_APPLICATION_ID_HERE'; 
const reclaim = new Reclaim(APP_ID);

// Function to build a proof request
export const buildProofRequest = async (providerId) => {
    const proofRequest = new ProofRequest(APP_ID);
    await proofRequest.buildProofRequest(providerId);
    return proofRequest;
};

// Function to fetch signature securely from backend
export const fetchSignature = async (proofRequest) => {
    // Implement call to your backend to fetch and set signature
    // ...
    await proofRequest.setSignature(/* fetched signature */); 
};

//  Function to handle full verification flow
export const requestVerification = async (proofRequest) => {
    await fetchSignature(proofRequest);

    const { requestUrl } = await proofRequest.createVerificationRequest();

     await proofRequest.startSession({
        onSuccessCallback: (proofs) => {
            // Handle successful verification (e.g., call BlockchainService to store proofs)
        },
        onFailureCallback: (error) => {
            // Handle verification failure
        },
    });

    return requestUrl;
};
