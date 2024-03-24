import { Reclaim } from '@reclaimprotocol/js-sdk';

// Define the app secret key
const APP_SECRET = "0xb5b11ecbfef734aafb8be0bcc50265adafdc46d28d28af667d2345012d4c4581";
const APP_ID = "0xFB8942B31faF0c5238c17B0c74f49D4dd38cb042";
// const APP_SECRET = "0x936f691ff55335076569e77cb69761110477052f7d620de2cf6c01d84cd5bcb1";
// const APP_ID = "0x0CF944A933AC0024d7ffb10fEfa379CfD976d241";
const reclaimClient = new Reclaim.ProofRequest(APP_ID);

// Function to get verification request
export const getVerificationReq = async () => {
        
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
    // await reclaimClient.startSession({
    //     onSuccessCallback: proof => {
    //         console.log('Verification success', proof);
    //         // Your business logic here
            
    //     },
    //     onFailureCallback: error => {
    //         console.error('Verification failed', error);
    //         // Your business logic here to handle the error
    //     }
    // });

    return { requestUrl, statusUrl };
};

export const updateVerificaitonStatus = async () => {
    const { verificationStatus, proof } = await new Promise((resolve, reject) => {
        reclaimClient.startSession({
            onSuccessCallback: proof => {
                console.log('Verification success', proof);
                resolve({ verificationStatus: 'Verified', proof });
            },
            onFailureCallback: error => {
                console.error('Verification failed', error);
                resolve({ verificationStatus: 'Error in verification', proof: null });
            }
        });
    });
    return {verificationStatus};
}