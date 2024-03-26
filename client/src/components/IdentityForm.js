import React, { useEffect, useState } from 'react';
import { getVerificationReq, updateVerificaitonStatus } from '../services/ReclaimService';
import { Link } from 'react-router-dom';
// Import the functions you need from the SDKs you need

// Initialize Firebase

// 66CCE7E9DG4LPYBJUBFDDQSL
// Twillio recovery code
function IdentityForm() {
  const [identityData, setIdentityData] = useState({
    email: '',
    phone: '',
    verificationMethod: ''
  });
  const [verificationLink, setVerificationLink] = useState('');
  const [verificationStatus, setVerificationStatus] = useState('');
  const [verificationSuccess, setVerificationSuccess] = useState(false);  
  const [verifiedData, setVerifiedData] = useState({
    dob: '1998-02-02',
  });

  useEffect(() => {
    const fetchDataAndUpdateComponent = async () => {
      const {verificationStatus, proof} = await updateVerificaitonStatus();
      console.log("hello")
      console.log(proof)
      console.log(verificationStatus)
      setVerificationStatus(verificationStatus);
      if(verificationStatus === 'Verified') {
        setVerificationSuccess(true);
        console.log(proof[0])      
        console.log(proof[0].extractedParameterValues)
        console.log(proof[0].extractedParameterValues.CLAIM_DATA)
        console.log(proof[0].extractedParameterValues.CLAIM_DATA.replace(/^"|"$/g, ''))


// Parse the CLAIM_DATA string, assuming it is properly formatted JSON
// First, remove the escaped quotes at the beginning and end
//       const claimDataJSONString = claimDataString.replace(/^"|"$/g, '');

// // Now parse the JSON string
// const claimData = JSON.parse(claimDataJSONString);
        
      }
    };

    fetchDataAndUpdateComponent(); // Call the function when the component mounts
  }, []); // Empty dependency array ensures it runs only once when the component mounts
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name === 'phone' && value.length > 10) return;

    setIdentityData({
      ...identityData,
      [e.target.name]: e.target.value
    });
  };

  const updateVerifiedData = async (data) => {

    try {
      const response = await fetch('https://your-api-endpoint.com/users', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      });

      if (response.ok) {
          const result = await response.json();
          console.log('Success:', result);
          // Handle success - for example, you might want to clear the form
      } else {
          console.error('Failed to send data');
          // Handle HTTP errors
      }
  } catch (error) {
      console.error('Error:', error);
      // Handle network errors
  }
};



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (identityData.email.trim() === '' && identityData.phone.trim() === '') {
      alert('Please enter at least an email address or a phone number.');
      return; // Prevent the rest of the function from running
  }
    try {
      const { requestUrl, statusUrl } = await getVerificationReq();
      setVerificationLink(requestUrl);
      setVerificationStatus('Pending');
       // Assume status is pending after initiating request
       var uri = '';
       var to = '';
      try {
        // Make a GET request to the API endpoint
        console.log(identityData.phone,requestUrl )
        if (identityData.phone.trim() === '') {
          uri = 'http://localhost:3500/send-email';
          to = identityData.email;
        } else {
          uri = 'http://localhost:3500/send-sms';
          to = identityData.phone;
        }
        const response = await fetch(uri, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ to: to, text: requestUrl})
        });

        if (response.ok) {
          console.log('Message sent successfully');
        } else {
          console.error('Failed to send message');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } catch (error) {
      console.error('Error initiating verification:', error);
      // Handle error if needed
    }
  };

  function formatPhoneNumber(phoneNumber) {
    // Ensure the phone number is a string to handle it correctly
    const phoneStr = phoneNumber.toString();
    
    // Check if the phone number length is more than 4 to proceed with formatting
    if (phoneStr.length > 4) {
      // Extract the first 2 and last 2 digits
      const firstTwo = phoneStr.substring(0, 2);
      const lastTwo = phoneStr.slice(-2);
      
      // Calculate the number of hidden characters
      const hiddenLength = 6;
      
      // Generate the string with hidden characters replaced by asterisks
      const hiddenChars = '*'.repeat(hiddenLength);
      
      // Combine all parts
      return `${firstTwo}${hiddenChars}${lastTwo}`;
    } else {
      // If phone number is 4 digits or less, return it as is
      return phoneStr;
    }
  }
  

  return (
    <>
    <div className="max-w-md mx-auto my-10 p-5 border border-gray-200 rounded-lg shadow mt-36 py-20 text-black">
    <h2 className="text-2xl font-bold mb-3 text-white">Request Identity Verification</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col">
        <label className="font-medium text-white">Email:</label>
        <input
          type="email"
          name="email"
          placeholder='xyz@abc.com'
          value={identityData.name}
          onChange={handleChange}
         
          className="mt-1 p-2 border border-gray-300 rounded text-black"
        />
      </div>
      <p className = "text-center text-white text-2xl font-bold "> OR </p>
      <div className="flex flex-col">
        <label className="font-medium  text-white">Phone Number:</label>
        <input
        
          type="number"
          name="phone"
          placeholder="Enter 10 digit phone number"
          value={identityData.phone}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded text-black"
        />
      </div>
      <div className="flex flex-col">
        <label className="font-medium text-white">Verification Method:</label>
        <select
        required
          name="verificationMethod"
          value={identityData.verificationMethod}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded bg-white text-black "
        >
          <option value="">Select Method</option>
          <option value="IITB">IIT Bombay</option>
          <option value="Aadhar">Aadhar</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full p-2 bg-blue-500  rounded hover:bg-blue-600 transition-colors"
      >
        Submit
      </button>
    </form>
    {/* {verificationLink && (
      <div className="mt-5">
        <p>Verification Link:</p>
        <a
          href={verificationLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600 transition-colors"
        >
          {verificationLink}
        </a>
      </div>
    )}
    {verificationStatus && (
      <p className="mt-5">Verification Status: {verificationStatus}</p>
    )} */}
  </div>


 {  (verificationStatus && !verificationSuccess) &&

 <div className="fixed inset-0 z-50 bg-opacity-50 bg-black">
 
 <section className="rounded-3xl shadow-2xl max-w-md bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
  <div className="p-8 text-center sm:p-12">
    <p className="text-sm font-semibold uppercase tracking-widest text-green-500">
    Thanks for your request!
    </p>

    <h2 className=" text-3xl font-bold text-black"><br></br>Verification Link sent to {identityData['phone'].trim()=== '' ? formatPhoneNumber(identityData['email']) : formatPhoneNumber(identityData['phone'])}</h2>

    

    
      
<div className="status flex justify-evenly items-center p-2">
<p class=" m-0 text-xl font-bold text-yellow-500"> Verification Pending</p>
  
  <div>
    <svg aria-hidden="true" class="block w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    </div>
   
</div>

   
    
    
  </div>
</section>


</div>}

{  (verificationSuccess) &&

<div className="fixed inset-0 z-50 bg-opacity-50 bg-black">

<section className="rounded-3xl shadow-2xl max-w-md bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
 <div className="p-8 text-center sm:p-12">
   <p className="text-sm font-semibold uppercase tracking-widest text-green-500">
   We are back with the verification!
   </p>

   <h2 className=" text-2xl font-bold text-black"><br></br>
   {Object.entries(verifiedData).map(([key, value], index) => (
      <div key={index}>
        <strong>{key}: </strong>{value}
      </div>
    ))}
   </h2>

   

   
     
<div className="status flex justify-evenly items-center p-2">
<p class=" m-0 text-xl font-bold text-green-500"> Verification Success</p>
 
 <div>
 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
    <path d="M20 6L9 17l-5-5"/>
  </svg>
   </div>
  
</div>
<Link to='/' className=" block bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded mt-3" >
                Back Home
            </Link>

  
   
   
 </div>
</section>


</div>}




  </>
  
  );
}

export default IdentityForm;