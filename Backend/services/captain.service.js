const captainModel = require('../models/captain.model');

module.exports.createCaptain = async ({
    firstname,
    lastname,
    email,
    password,
    color,
    plate,
    capacity,
    vehicleType,
}) => {
    if (!firstname || !email || !password || !color || !plate || !capacity || !vehicleType) {
        throw new Error('All required fields must be provided');
    }

    // Hash the password
    const hashedPassword = await captainModel.hashPassword(password);

    // Create the captain
    const captain = await captainModel.create({
        fullname: {
            firstname,
            lastname :lastname || '',
        },
        email,
        password: hashedPassword,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType: vehicleType, // Ensure spelling matches the schema
        },
    });

    return captain;
};
