// routes/event.routes.js
const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const eventController = require('../controllers/eventController');

// Routes for events
router.post('/create',
    [
        body('name').notEmpty().withMessage('Event name is required'),
        body('description').isString().optional(),
        body('date').isISO8601().withMessage('Date must be in ISO 8601 format'),
        body('location').isString().withMessage('Location should be at least 5 letters'),
        body('organizer').isMongoId().withMessage('Organizer must be a valid ID'),
        body('members').isArray().withMessage('Members must be an array').optional(),
    ],
    eventController.createEvent
); // Create an event

router.get('/:id', eventController.getEvent); // Get a specific event by ID
router.get('/', eventController.getAllEvents); // Get all events

router.put('/edit/:id',
    [
        body('name').optional().isString().withMessage('Name must be a string'),
        body('description').optional().isString().withMessage('Description must be a string'),
        body('date').optional().isISO8601().withMessage('Date must be in ISO 8601 format'),
        body('location').optional().isString().withMessage('Location must be a string'),
        body('organizer').optional().isMongoId().withMessage('Organizer must be a valid ID'),
        body('members').optional().isArray().withMessage('Members must be an array'),
    ],
    eventController.updateEvent
); // Update an event by ID

router.delete('/delete/:id', eventController.deleteEvent); // Delete an event by ID

module.exports = router;
