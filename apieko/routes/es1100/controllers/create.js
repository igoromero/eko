const Repository = getmodule('repositories/es1100');

module.exports = (req, res) => {

    Repository.create(req.body, (data) => res.json(data));

};
