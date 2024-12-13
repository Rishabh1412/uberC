const userService = require('../services/user.service');
const { validationResult } = require('express-validator');
const blacklistModel =require('../models/blacklistToken.model');
const userModel = require('../models/user.model');


module.exports.registerUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { fullname, email, password } = req.body;

        // Check if the user already exists
        const isUserExist = await userModel.findOne({ email });
        if (isUserExist) {
            return res.status(400).json({ message: 'User already exists.' });
        }

        // Hash the password
        const hashedPassword = await userModel.hashPassword(password)

        // Create the user
        const user = await userService.createUser({
            firstname: fullname.firstname,
            lastname: fullname.lastname || '',
            email,
            password: hashedPassword,
        });

        // Generate JWT token
        const token = user.generateAuthToken();
        res.cookie('token', token, { httpOnly: true});


        // Respond with token and user (hiding sensitive data)
        res.status(201).json({ 
            token, 
            user: { 
                email: user.email, 
                fullname: user.fullname 
            } 
        });
    } catch (error) {
        console.error(error);
        next(error); // Pass errors to error-handling middleware
    }
};

module.exports.loginUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        const user = await userModel.findOne({ email }).select('+password');
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = user.generateAuthToken();
        res.cookie('token', token, { httpOnly: true});

        // Respond with the token and user details
        res.status(200).json({ 
            token, 
            user: { 
                email: user.email, 
                fullname: user.fullname 
            } 
        });
    } catch (error) {
        next(error); // Pass errors to error-handling middleware
    }
};


module.exports.getUserProfile=async(req,res,next) => {
    res.status(200).json(req.user);
};

module.exports.logoutUser=async(req,res,next)=>{
    res.clearCookie('token');
    const token=req.cookies.token || req.headers.authorization.split(' ')[1];

    await blacklistModel.create({ token });
    res.status(200).json({message:'Logged out'});
}