const mongoose = require('mongoose');

// Define user schema
const userSchema = new mongoose.Schema({
    id: String,
    name: String,
    proofs: [{
        data: {
            type: String,
            required: true
        },
        timestamp: {
            type: Date,
            default: Date.now
        }
    }]
    // Add more fields as needed
});

// Create user model
const User = mongoose.model('User', userSchema);

// Export the model
module.exports = User;
