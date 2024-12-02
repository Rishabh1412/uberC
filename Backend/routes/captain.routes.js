const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const captainController = require('../controllers/captain.controller');
const authMiddleware=require('../middlewares/auth.middleware');


router.post('/register', [
    body('email')
        .isEmail().withMessage('Invalid Email')
        .normalizeEmail(),
    body('fullname.firstname')
        .isLength({ min: 3 }).withMessage('Firstname must be at least 3 characters long.')
        .trim(),
    body('fullname.lastname')
        .optional()
        .isLength({ min: 3 }).withMessage('Lastname must be at least 3 characters long.')
        .trim(),

    body('password')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long.')
        .matches(/\d/).withMessage('Password must contain at least one digit.')
        .matches(/[a-z]/).withMessage('Password must contain at least one lowercase letter.')
        .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter.')
        .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('Password must contain at least one special character.'),

    body('vehicle.color')
        .isLength({ min: 3 }).withMessage('Vehicle color must be at least 3 characters long.')
        .trim(),

    body('vehicle.plate')
        .isLength({ min: 3 }).withMessage('Vehicle plate must be at least 3 characters long.')
        .trim(),

    body('vehicle.capacity')
        .isInt({ min: 1 }).withMessage('Vehicle capacity must be at least 1.'),

    body('vehicle.vehicleType')
        .isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid vehicle type. Must be one of: car, motorcycle, auto.'),

    // Location validation (optional fields)
    body('location.lat')
        .optional()
        .isFloat({ min: -90, max: 90 }).withMessage('Latitude must be a valid number between -90 and 90.'),

    body('location.long')
        .optional()
        .isFloat({ min: -180, max: 180 }).withMessage('Longitude must be a valid number between -180 and 180.')
], 
    captainController.registerCaptain
);

router.post('/login',[
    body('email').isEmail().isLength({min:3}).withMessage('Email must be valid.'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long.'),
],
    captainController.loginCaptain
);

router.get('/profile',authMiddleware.authCaptain,captainController.getCaptainProfile);

router.get('/logout',authMiddleware.authCaptain,captainController.logoutCaptain);

module.exports = router;
