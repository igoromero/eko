const Repository = getmodule('repositories/es1201');

module.exports = (req, res) => {

    Repository.all((data) => res.json(data));

};
