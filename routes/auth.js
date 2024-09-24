// Path 
const express = require('express');

// Router 
const router = express.Router();

// Imports 
const authController = require('../controllers/auth-controller');
const limiter = require('../middlewares/limiter');
const { validate_register, handle_validation_errors } = require('../middlewares/validation');


// Login 
router.use('/login', limiter, authController.login);

// Register
router.use('/register', validate_register, handle_validation_errors, authController.register);

// Logout
router.use('/logout', authController.logout);

// Refresh Token 
router.use('/refresh-token', authController.refreshAccessToken);

module.exports = router;