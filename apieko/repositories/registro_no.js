const Registro = getmodule('models/registro_no');

module.exports = {

    all: (cb) => {
        Registro.find({}, (err, registros) => {

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

    get: (noid, cb) => {

        Registro.find({"noid":noid}, (err, registros) => {

            let data = {};

            if (err) {
                data = {
                    error: true,
                    error_message: err
                };
            }
            data = {
                'no': { registros }

                };

            return cb(data);

        });
    },


    create: (data, cb) => {
        let no = {data: data.data, noid: data.noid, bv: data.bv, sv: data.sv, tempInterna: data.tempInterna};

        Registro.collection.insert(no, (err, registro) => {

            let data = {};

            if (err) {
                data = {
                    error: true,
                    error_message: err
                };
            }

            data = {
                'data': {registro}
            };

            return cb(data);
        });
    },
    update: (id, data, cb) => {
        Registro.update({'_id': id}, {$set: data}, (err) => {

            let data = {};

            if (err) {
                data = {
                    error: true,
                    error_message: err
                };
            }

            no.findById(id, (err, no) => {
                if (err) {
                    data = {
                        error: true,
                        error_message: err
                    };
                }

                data = {
                    'data': {no}
                };

                return cb(data);
            });

            return true;

        });
    },
    remove: (id, cb) => {
        Registro.findByIdAndRemove(id, (err) => {

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
