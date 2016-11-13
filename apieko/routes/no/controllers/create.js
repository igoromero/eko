const Repository = getmodule('repositories/no');

module.exports = (req, res) => {

    Repository.create(req.body, (data) => res.json(data));

};
