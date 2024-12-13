const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Define the User Schema
const userSchema = new mongoose.Schema(
    {
        fullname: {
            firstname: {
                type: String,
                required: true,
                minlength: [3, 'Firstname must be at least 3 characters long'],
                trim: true,
            },
            lastname: {
                type: String,
                minlength: [3, 'Lastname must be at least 3 characters long'],
                trim: true,
            },
        },
        email: {
            type: String,
            required: true,
            unique: true,
            minlength: [5, 'Email must be at least 5 characters long'],
            match: [/\S+@\S+\.\S+/, 'Invalid email address'],
            trim: true,
        },
        password: {
            type: String,
            required: true,
            select: false,
            minlength: [8, 'Password must be at least 8 characters long'],
        },
        socketId: {
            type: String,
        },
        roles: [
            {
                eventId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Event',
                    required: true,
                },
                role: {
                    type: String,
                    enum: ['Admin', 'Organizer', 'Member', 'Viewer'],
                    required: true,
                },
            },
        ],
    },
    { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Generate JWT token
userSchema.methods.generateAuthToken = function (role) {
    const token = jwt.sign(
        {
            _id: this._id,
            role: role, // Include the specific role for the current event
        },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
    );
    return token;
};

// Compare password
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// Static method: Hash password
userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
};

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
