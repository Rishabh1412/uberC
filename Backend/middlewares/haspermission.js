// middleware/hasPermission.js
module.exports = function hasPermission(event, userId, permission) {
    const member = event.members.find(m => m.user.toString() === userId.toString());
    if (!member) return false; // User is not a member of the event
    return member.permissions.includes(permission); // Check if permission exists
};
