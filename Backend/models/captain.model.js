const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: [true, 'Firstname is required'], // Use an array for custom error messages
            minlength: [3, 'Firstname must be at least 3 characters long'],
        },
        lastname: {
            type: String,
            minlength: [3, 'Lastname must be at least 3 characters long'],
        },
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        select: false,
    },
    socketId: {
        type: String,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive',
    },
    vehicle: {
        color: {
            type: String,
            required: [true, 'Vehicle color is required'],
            minlength: [3, 'Color must be at least 3 characters long'],
        },
        plate: {
            type: String,
            required: [true, 'Vehicle plate is required'],
            minlength: [3, 'Plate must be at least 3 characters long'],
        },
        capacity: {
            type: Number,
            required: [true, 'Vehicle capacity is required'],
            min: [1, 'Capacity must be at least 1'],
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ['car', 'motorcycle', 'auto'],
        },
    },
    location: {
        lat: {
            type: Number,
        },
        long: {
            type: Number,
        },
    },
});

// Generate JWT
captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
};

// Compare password
captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// Hash password
captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
};

const captainModel = mongoose.model('captain', captainSchema);

module.exports = captainModel;
