const mongoose = require('mongoose');

// Define the BlacklistToken schema
const blacklistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: '1d', // Tokens will expire in 1 day (optional, depending on your use case)
    },
});

// Create a model for BlacklistToken
module.exports = mongoose.model('BlacklistToken', blacklistTokenSchema);
