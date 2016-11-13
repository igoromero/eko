const Sensor = getmodule('models/es1401');

module.exports = {

    all: (cb) => {
        Sensor.find({}, (err, registros) => {

            let data = {};

            if (err) {
                data = {
                    error: true,
                    error_message: err
                };
            }
            data = {
                registros
            };

            return cb(data);

        });

    },

    get: (id, cb) => {

        Sensor.find({"noid":id}, (err, info) => {

            let data = {};

            if (err) {
                data = {
                    error: true,
                    error_message: err
                };
            }
            data = {
                'data': {info}
            };

            return cb(data);

        });
    },


    create: (data, cb) => {
        let info = {data: data.data, noid: data.noid, radiacaoSolar: data.radiacaoSolar};

        Sensor.collection.insert(info, (err, info) => {

            let data = {};

            if (err) {
                data = {
                    error: true,
                    error_message: err
                };
            }

            data = {
                'data': {info}
            };

            return cb(data);
        });
    },
    update: (id, data, cb) => {
        Sensor.update({'_id': id}, {$set: data}, (err) => {

            let data = {};

            if (err) {
                data = {
                    error: true,
                    error_message: err
                };
            }

            info.findById(id, (err, info) => {
                if (err) {
                    data = {
                        error: true,
                        error_message: err
                    };
                }

                data = {
                    'data': {info}
                };

                return cb(data);
            });

            return true;

        });
    },
    remove: (id, cb) => {
        Sensor.findByIdAndRemove(id, (err) => {

            if (err) {
                data = {
                    error: true,
                    error_message: err
                };
            }

            data = {
                status: true
            };

            return cb(data);

        });
    }



};
