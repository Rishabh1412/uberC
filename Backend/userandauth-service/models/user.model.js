const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');  // For hashing passwords
const jwt = require('jsonwebtoken'); // For generating JWT tokens

// Define the user schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    fullname: {
        firstname: {
            type: String,
            required: true,
        },
        lastname: {
            type: String,
            required: true,
        },
    },
    profilePic: {
        type: String,
    },
    phoneNumber: {
        type: Number,
    },
    password: {
        type: String,
        required: true,
    },
});

// Method to compare the entered password with the stored hashed password
userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

// Method to generate a JWT token after login
userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ userId: this._id }, 'your_jwt_secret', { expiresIn: '24h' });
    return token;
};


userSchema.methods.hashPassword =async (password) => {
    return await bcrypt.hash(password, 10);
};

// Create a user model from the schema
module.exports = mongoose.model('User', userSchema);
