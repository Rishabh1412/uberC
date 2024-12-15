// services/eventService.js
const Event = require('../models/event.model');

// Service for creating an event
exports.createEvent = async ({ name, description, date, location, organizer, members }) => {
    try {
        const newEvent = await Event.create({ name, description, date, location, organizer, members });
        return newEvent;
    } catch (error) {
        throw new Error('Error creating event: ' + error.message);
    }
};

// Service for getting a single event by ID
exports.getEvent = async (id) => {
    try {
        const event = await Event.findById(id);
        if (!event) {
            throw new Error('Event not found');
        }
        return event;
    } catch (error) {
        throw new Error('Error fetching event: ' + error.message);
    }
};

// Service for getting all events
exports.getAllEvents = async () => {
    try {
        const events = await Event.find();
        return events;
    } catch (error) {
        throw new Error('Error fetching events: ' + error.message);
    }
};

// Service for updating an event by ID
exports.updateEvent = async (id, updateData) => {
    try {
        const updatedEvent = await Event.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedEvent) {
            throw new Error('Event not found');
        }
        return updatedEvent;
    } catch (error) {
        throw new Error('Error updating event: ' + error.message);
    }
};

// Service for deleting an event by ID
exports.deleteEvent = async (id) => {
    try {
        const deletedEvent = await Event.findByIdAndDelete(id);
        if (!deletedEvent) {
            throw new Error('Event not found');
        }
        return deletedEvent;
    } catch (error) {
        throw new Error('Error deleting event: ' + error.message);
    }
};
