const mongoose = require('mongoose');

const schema = new mongoose.Schema({


    data: Date,
    noid: Number,
    umidade: Number,
    temperatura: Number,
    pontoOrvalho: Number
});

module.exports = mongoose.model('es1201', schema);
