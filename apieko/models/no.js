const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    talhao: String,
    latlong: String,
    safra: String,
    noid: Number
});

module.exports = mongoose.model('No', schema);
