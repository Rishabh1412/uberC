const axios = require('axios');

module.exports.getAddressCoordinate = async (address) => {
    try {
        // Replace 'YOUR_API_KEY' with your Google Maps API key
        const apiKey = process.env.GOOGLE_MAPS_API;

        // Make a request to the Google Maps Geocoding API
        const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
            params: {
                address: address,
                key: apiKey,
            },
        });

        // Check if the response has results
        if (response.data.status === 'OK' && response.data.results.length > 0) {
            const location = response.data.results[0].geometry.location;

            // Return an object with lat and lon
            return {
                lat: location.lat,
                lon: location.lng,
            };
        } else {
            throw new Error('No results found for the given address');
        }
    } catch (error) {
        console.error('Error fetching coordinates:', error.message);
        throw new Error('Failed to get coordinates. Please check the address or API key.');
    }
};