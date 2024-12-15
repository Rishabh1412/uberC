const Event = require('../models/event.model'); // Import Event model
const jwt =require('jsonwebtoken')
const checkEventPermissions = async (req, res, next) => {
    try {
        const { id: eventId } = req.params;
        const token=req.cookies.token || req.headers.authorization?.split(' ')[1];
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        const userId = decoded.userId;
        // console.log(decoded) // Get user ID from decoded token
        // console.log(userId);

        const event = await Event.findById(eventId);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        // Check if the user is the organizer
        if (event.organizer.toString() === userId) {
            return next();
        }

        // Check if the user is in the members list with permissions
        const isMemberWithPermission = event.members.some((member) => {
            return (
                member.user.toString() === userId &&
                member.permissions.includes('edit') // You can replace 'edit' with other required permissions
            );
        });

        if (!isMemberWithPermission) {
            return res.status(403).json({ message: 'Access denied. You do not have permission for this event.' });
        }

        next();
    } catch (error) {
        console.error('Permission check error:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};

module.exports = checkEventPermissions;
