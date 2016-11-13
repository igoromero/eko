const Repository = getmodule('repositories/sensor');

module.exports = (req, res) => {

    Repository.create(req.body, (data) => res.json(data));

};
