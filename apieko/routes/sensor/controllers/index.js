const Repository = getmodule('repositories/sensor');

module.exports = (req, res) => {

    Repository.all((data) => res.json(data));

};
