const Repository = getmodule('repositories/registro_no');

module.exports = (req, res) => {

    let id = req.params.id;

    Repository.update(id, req.body, (data) => res.json(data));

};
