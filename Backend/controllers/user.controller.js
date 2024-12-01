const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const { validationResult } = require('express-validator');
const blackListModel=require('../models/blacklistToken.model');

module.exports.registerUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        console.log(req.body);

        const { fullname, email, password } = req.body;
        
        const isUserExist=await userModel.findOne({email});

        if(isUserExist){
            return res.status(400).json({message:'Captain already exists'})
        }
        // Hash the password
        const hashPassword = await userModel.hashPassword(password);

        // Create the user
        const user = await userService.createUser({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashPassword,
        });

        // Generate JWT token
        const token = user.generateAuthToken();

        // Respond with token and user (hide sensitive info)
        res.status(201).json({ token, user: { email: user.email, fullname: user.fullname } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
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

        res.cookie('token',token);

        res.status(200).json({ token, user });
    } catch (error) {
        next(error);
    }
};

module.exports.getUserProfile=async(req,res,next) => {
    res.status(200).json(req.user);
};

module.exports.logoutUser=async(req,res,next)=>{
    res.clearCookie('token');
    const token=req.cookies.token || req.headers.authorization.split(' ')[1];

    await blackListModel.create({ token });
    res.status(200).json({message:'Logged out'});
}