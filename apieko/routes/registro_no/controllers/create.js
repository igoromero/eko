const Repository = getmodule('repositories/registro_no');

module.exports = (req, res) => {

    Repository.create(req.body, (data) => res.json(data));

};
