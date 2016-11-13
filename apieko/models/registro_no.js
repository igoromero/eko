const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    data: Date,
    noid: Number,
    bv: Number,
    sv: Number,
    tempInterna: Number
});

module.exports = mongoose.model('Registro_No', schema);
