const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.ATLAS_URI);
        console.log('Successfully connected to MongoDB.');
    } catch (error) {
        console.log(error);
        throw new Error('There was a problem connecting to MongoDB.');
    }
}

module.exports = {
    dbConnection
}