const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        date: {
            type: Date,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            trim: true,
        },
        location: {
            address: {
                type: String,
                trim: true,
            },
            latitude: {
                type: Number,
            },
            longitude: {
                type: Number,
            },
        },
        participants: [
            {
                userId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'User',
                },
                role: {
                    type: String,
                    enum: ['Organizer', 'Member', 'Viewer'],
                    default: 'Member',
                },
            },
        ],
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        tasks: [
            {
                taskId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Task',
                },
            },
        ],
        isPublic: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

const eventModel = mongoose.model('Event', eventSchema);

module.exports = eventModel;
