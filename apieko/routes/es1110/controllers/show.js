const Repository = getmodule('repositories/es1110');

module.exports = (req, res) => {

    let id = req.params.id;

    Repository.get(id, (data) => res.json(data));

};
