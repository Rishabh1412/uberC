const mongoose = require('mongoose');
const bcrypt = require('bcrypt');  // For hashing passwords
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

userSchema.methods.hashPassword = async function() {
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    } catch (error) {
        console.error('Error hashing password:', error);
        throw new Error('Password hashing failed');
    }
};

// Method to compare the entered password with the stored hashed password
userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

// Method to generate a JWT token after login
userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ userId: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
};


const User=mongoose.model('User', userSchema);
// Create a user model from the schema
module.exports = User;
