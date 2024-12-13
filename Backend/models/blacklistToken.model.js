const mongoose = require('mongoose');

const blackListSchema = new mongoose.Schema(
    {
        token: {
            type: String,
            required: true,
            unique: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            expires: 86400,
        },
    },
    {
        timestamps: false, 
    }
);
const blacklistModel = mongoose.model('BlacklistToken', blackListSchema);

module.exports = blacklistModel;
