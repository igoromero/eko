const Repository = getmodule('repositories/es1110');

module.exports = (req, res) => {

    Repository.all((data) => res.json(data));

};
