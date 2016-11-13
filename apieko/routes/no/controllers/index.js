const Repository = getmodule('repositories/no');

module.exports = (req, res) => {

    Repository.all((data) => res.json(data));

};
