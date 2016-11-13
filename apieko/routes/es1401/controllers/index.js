const Repository = getmodule('repositories/es1401');

module.exports = (req, res) => {

    Repository.all((data) => res.json(data));

};
