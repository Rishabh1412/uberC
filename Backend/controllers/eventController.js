// controllers/event.controller.js
const eventService=require('../services/event.services')

// Create a new event
exports.createEvent = async (req, res, next) => {
    try {
        const { name, description, date, location, organizer, members } = req.body;
        const newEvent = await eventService.createEvent({ name, description, date, location, organizer, members });
        res.status(201).json({response:{message:"Event created",event:newEvent}});
    } catch (error) {
        console.error('Error creating event:', error);
        next(error);
    }
};

// Get an event by ID
// Get an event by ID
exports.getEvent = async (req, res, next) => {
    try {
        const { id } = req.params; // Access id from the route parameters
        const event = await eventService.getEvent(id); // Pass the id to the service function
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json(event);
    } catch (error) {
        console.error('Error fetching event:', error);
        next(error);
    }
};


// Get all events
exports.getAllEvents = async (req, res, next) => {
    try {
        const events = await eventService.getAllEvents();
        res.status(200).json(events);
    } catch (error) {
        console.error('Error fetching events:', error);
        next(error);
    }
};

// Update an event by ID
exports.updateEvent = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedEvent = await eventService.updateEvent(id,req.body);
        if (!updatedEvent) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json(updatedEvent);
    } catch (error) {
        console.error('Error updating event:', error);
        next(error);
    }
};

// Delete an event by ID
exports.deleteEvent = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedEvent = await eventService.deleteEvent(id);
        if (!deletedEvent) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json({ message: 'Event deleted successfully', event: deletedEvent });
    } catch (error) {
        console.error('Error deleting event:', error);
        next(error);
    }
};
