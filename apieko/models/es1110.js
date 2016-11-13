const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    data: Date,
    noid: Number,
    umidadeextsolo: Number
});

module.exports = mongoose.model('es1110', schema);
