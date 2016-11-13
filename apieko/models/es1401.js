const mongoose = require('mongoose');

const schema = new mongoose.Schema({


    data: Date,
    noid: Number,
    radiacaoSolar: Number
});

module.exports = mongoose.model('es1401', schema);
