const Repository = getmodule('repositories/es1301');

module.exports = (req, res) => {

    Repository.all((data) => res.json(data));

};
