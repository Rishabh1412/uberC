const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const { validationResult } = require('express-validator');

module.exports.registerUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        console.log(req.body);

        const { fullname, email, password } = req.body;

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