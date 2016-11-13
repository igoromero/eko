const Repository = getmodule('repositories/es1301');

module.exports = (req, res) => {

    Repository.create(req.body, (data) => res.json(data));

};
