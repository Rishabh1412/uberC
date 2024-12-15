const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    organizer: {
        type: mongoose.Schema.Types.ObjectId, // Main organizer of the event
        ref: 'User',
        required: true,
    },
    location: {
        type: {
            type: String, // "virtual" or "physical"
            required: true,
            enum: ['virtual', 'physical'],
        },
        details: {
            type: String, // Zoom link, address, or location details
            required: true,
        },
    },
    date: {
        start: {
            type: Date,
            required: true,
        },
        end: {
            type: Date,
            required: true,
        },
    },
    isRecurring: {
        type: Boolean,
        default: false,
    },
    recurrence: {
        type: {
            frequency: {
                type: String, // daily, weekly, monthly, yearly
                enum: ['daily', 'weekly', 'monthly', 'yearly'],
            },
            interval: {
                type: Number, // e.g., every 2 weeks
                min: 1,
            },
            endRecurrence: Date, // When the recurrence stops
        },
        required: function () {
            return this.isRecurring;
        },
    },
    maxAttendees: {
        type: Number,
        min: 1,
        default: 100,
    },
    attendees: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
            status: {
                type: String,
                enum: ['confirmed', 'pending', 'declined'], // RSVP statuses
                default: 'pending',
            },
        },
    ],
    members: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
            role: {
                type: String,
                enum: ['organizer', 'co-organizer', 'participant'], // Member roles
                default: 'participant',
            },
            permissions: {
                type: [String], // Specific permissions (e.g., ['edit', 'view'])
                default: ['view'], // Participants only view by default
            },
        },
    ],
    tickets: {
        enabled: {
            type: Boolean,
            default: false,
        },
        price: {
            type: Number,
            min: 0,
            validate: {
                validator: function (v) {
                    return !this.tickets.enabled || v > 0; // Price must be > 0 if tickets are enabled
                },
                message: 'Price must be greater than 0 if tickets are enabled.',
            },
        },
        currency: {
            type: String,
            default: 'USD',
        },
    },
    status: {
        type: String,
        enum: ['upcoming', 'ongoing', 'completed', 'cancelled'],
        default: 'upcoming',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

// Ensure start date is before end date
eventSchema.pre('save', function (next) {
    if (this.date.start > this.date.end) {
        return next(new Error('Start date cannot be after end date.'));
    }
    this.updatedAt = Date.now();
    next();
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
