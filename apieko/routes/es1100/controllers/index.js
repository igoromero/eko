const Repository = getmodule('repositories/es1100');

module.exports = (req, res) => {

    Repository.all((data) => res.json(data));

};
