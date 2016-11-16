const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    descricao: String,
    lat: Number,
    long: Number,
    noid: Number
});

module.exports = mongoose.model('No', schema);
