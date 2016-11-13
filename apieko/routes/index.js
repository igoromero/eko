module.exports = (app) => {

    /**
     * Index
     */
    app.get('/v1', (req, res) => res.json('ok'));

    /**
     * User
     */
    app.use('/v1/nos', require('./no/no'));
    app.use('/v1/registros/nos', require('./registro_no/registro_no'));
    app.use('/v1/registros/es1100', require('./es1100/es1100'));
    app.use('/v1/registros/es1110', require('./es1110/es1110'));
    app.use('/v1/registros/eS1201', require('./es1201/es1201'));
    app.use('/v1/registros/eS1301', require('./es1301/es1301'));
    app.use('/v1/registros/eS1401', require('./es1401/es1401'));

};
