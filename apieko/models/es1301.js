const mongoose = require('mongoose');

const schema = new mongoose.Schema({


    data: Date,
    noid: Number,
    moliamentoFoliar: Number
});

module.exports = mongoose.model('es1301', schema);
