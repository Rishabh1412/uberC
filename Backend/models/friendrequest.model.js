const mongoose = require('mongoose');

const friendRequestSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Middleware to handle automatic deletion when status is set to 'rejected'
friendRequestSchema.pre('save', async function (next) {
    if (this.status === 'rejected') {
        // If rejected, remove the document
        await this.remove();
    }
    next();
});

friendRequestSchema.post('findOneAndUpdate', async function (doc) {
    if (doc && doc.status === 'rejected') {
        // If rejected, remove the document
        await doc.remove();
    }
});

const FriendRequest = mongoose.model('FriendRequest', friendRequestSchema);

module.exports = FriendRequest;
