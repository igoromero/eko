const mongoose = require('mongoose');

const schema = new mongoose.Schema({


    data: Date,
    noid: Number,
    umidadeIntSolo: Number
});

module.exports = mongoose.model('es1100', schema);
