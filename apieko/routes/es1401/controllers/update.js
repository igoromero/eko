const Repository = getmodule('repositories/es1401');

module.exports = (req, res) => {

    let id = req.params.id;

    Repository.update(id, req.body, (data) => res.json(data));

};
