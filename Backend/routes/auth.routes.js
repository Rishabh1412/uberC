const express = require('express');
const { body } = require('express-validator');
const userController = require('../controllers/user.controller');
const router = express.Router();

// Registration route
router.post('/register', [
    body('email')
        .isEmail()
        .withMessage('Invalid email format')
        .normalizeEmail(),
    body('fullname.firstname')
        .isLength({ min: 3 })
        .withMessage('Firstname should be at least 3 characters long.')
        .trim(),
    body('password')
        .isLength({ min: 6 })
        .withMessage('Password should be at least 6 characters long.')
        .matches(/\d/)
        .withMessage('Password must contain at least one number.')
], userController.registerUser);

// Login Route
router.post('/login', [
    body('email')
        .isEmail()
        .withMessage('Invalid email format')
        .normalizeEmail(),
    body('password')
        .isLength({ min: 6 })
        .withMessage('Password should be at least 6 characters long.')
], userController.loginUser);

router.get('/logout',userController.logoutUser);

module.exports = router;
