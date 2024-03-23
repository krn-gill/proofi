import { Reclaim } from '@reclaimprotocol/js-sdk';

// Define the app secret key
const APP_SECRET = "0xfc4384411ac6bde4b2cabe0f77cd214ececb706c6bf604fb60f8c0a35a180c04";

// Function to get verification request
export const getVerificationReq = async () => {
    const APP_ID = "0x89cFd30317E616d7eD1d7DC54f4D0449424F0BE9";
    const reclaimClient = new Reclaim.ProofRequest(APP_ID);

    const providerIds = [
        '5e1302ca-a3dd-4ef8-bc25-24fcc97dc800', // Aadhaar Card Date of Birth
    ];

    // Build proof request
    await reclaimClient.buildProofRequest(providerIds[0]);

    // Set app secret key
    reclaimClient.setSignature(await reclaimClient.generateSignature(APP_SECRET));

    // Create verification request
    const { requestUrl, statusUrl } = await reclaimClient.createVerificationRequest();

    // Start verification session
    await reclaimClient.startSession({
        onSuccessCallback: proof => {
            console.log('Verification success', proof);
            // Your business logic here
        },
        onFailureCallback: error => {
            console.error('Verification failed', error);
            // Your business logic here to handle the error
        }
    });

    return { requestUrl, statusUrl };
};
