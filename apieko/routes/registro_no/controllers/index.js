const Repository = getmodule('repositories/registro_no');

module.exports = (req, res) => {

    Repository.all((data) => res.json(data));

};
