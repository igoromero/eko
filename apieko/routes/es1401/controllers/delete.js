const Repository = getmodule('repositories/es1401');

module.exports = (req, res) => {

    let id = req.params.id;

    Repository.remove(id, (data) => res.json(data));

};
