const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Vonage } = require('@vonage/server-sdk');
const mongoose = require('mongoose')
const db = require('./db')
const User = require('./models/user');
// const connectDB = require('./db');


const app = express();
const port = process.env.PORT || 3500;

app.use(cors()); // Use the cors middleware
app.use(bodyParser.json()); // Parse JSON bodies
// connectDB()

// Initialize Vonage client
const vonage = new Vonage({
  apiKey: "4982ad45",
  apiSecret: "jrcNJvZNxHzr4zi5"
});

app.post('/addUser', async (req, res) => {
  try {
    const { id, name, proofs } = req.body;
    const newUser = new User({ id, name, proofs });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

// Express route to handle inserting a proof for a particular user
app.post('/addProof/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const {proof } = req.body;

    // Find the user by ID
    console.log(proof)
    const user = await User.findOne({id:userId});
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Insert the proof
    user.proofs.push(proof);
    await user.save();

    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to insert proof' });
  }
});

// Express route to handle retrieving all proofs of a particular user
app.get('/getProofs/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;

    // Find the user by ID
    const user = await User.findOne({id:userId});
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Return proofs of the user
    res.json(user.proofs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve user proofs' });
  }
});


// Route to send SMS
app.post('/send-sms', async (req, res) => {
  const from = "Proofi";
  console.log(req.body)
  var { to, text } = req.body;
  to =  "91" + to;
  text = "This link was generated by Proofi:\n" + text + "\n";
  async function sendSMS() {
    await vonage.sms.send({to, from, text})
        .then(resp => { console.log('Message sent successfully'); console.log(resp); 
	res.status(200).send('Message send');
	})
        .catch(err => { console.log('There was an error sending the messages.'); console.error(err);
        res.status(500).send('Error sending SMS');
	});
  }
	sendSMS();
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

