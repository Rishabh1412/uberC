const blacklistTokenModel = require('../models/blacklistToken.model');
const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');

module.exports.registerCaptain = async (req, res, next) => {
    try {
        // Validate the incoming request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { fullname, email, password, vehicle } = req.body;

        // Check if captain already exists
        const isCaptainExist = await captainModel.findOne({ email });
        if (isCaptainExist) {
            return res.status(400).json({ message: 'Captain already exists' });
        }

        // Create a new captain
        const captain = await captainService.createCaptain({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password,
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            vehicleType: vehicle.vehicleType,
        });

        // Generate a token for the captain
        const token = captain.generateAuthToken();

        res.status(201).json({ token, captain });
    } catch (error) {
        next(error); // Forward the error to the error-handling middleware
    }
};

module.exports.loginCaptain = async (req, res, next) => {
    try {
        // Validate the incoming request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        // Check if the captain exists
        const captain = await captainModel.findOne({ email }).select('+password');
        if (!captain) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Validate the password
        const isMatch = await captain.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Generate a token
        const token = captain.generateAuthToken();

        res.cookie('token', token, { httpOnly: true }); // Set the token as an HTTP-only cookie
        res.status(200).json({ token, captain });
    } catch (error) {
        next(error); // Forward the error to the error-handling middleware
    }
};

module.exports.getCaptainProfile = async (req, res, next) => {
    try {
        if (!req.captain) {
            return res.status(404).json({ message: 'Captain not found' });
        }
        res.status(200).json({ captain: req.captain });
    } catch (error) {
        next(error); // Forward the error to the error-handling middleware
    }
};

module.exports.logoutCaptain = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(400).json({ message: 'No token provided' });
        }

        // Blacklist the token
        await blacklistTokenModel.create({ token });

        // Clear the token cookie
        res.clearCookie('token');

        res.status(200).json({ message: 'Logout successfully' });
    } catch (error) {
        next(error); // Forward the error to the error-handling middleware
    }
};
