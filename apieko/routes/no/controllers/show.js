const Repository = getmodule('repositories/no');

module.exports = (req, res) => {

    let id = req.params.id;

    Repository.get(id, (data) => res.json(data));

};
