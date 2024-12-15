// middleware/checkPermission.js
const hasPermission = require('./haspermission');

module.exports = (permission) => {
    return (req, res, next) => {
        const userId = req.user.id; // Assuming user ID is available in req.user
        const event = req.event; // Assuming the event is fetched and attached to the req object

        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        const isAllowed = hasPermission(event, userId, permission);
        if (!isAllowed) {
            return res.status(403).json({ message: 'Access denied. Permission required.' });
        }

        next(); // Permission granted
    };
};
