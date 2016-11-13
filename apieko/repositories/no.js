const No = getmodule('models/no');

module.exports = {

    all: (cb) => {
        No.find({}, (err, nos) => {

            let data = {};

            if (err) {
                data = {
                    error: true,
                    error_message: err
                };
            }
            data = {
                nos
            };

            return cb(data);

        });

    },

    get: (id, cb) => {

        No.find({"id":id}, (err, no) => {

            let data = {};

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
    },


    create: (data, cb) => {
        let no = {talhao: data.talhao, latlong: data.latlong, safra: data.safra, noid: data.noid };

        No.collection.insert(no, (err, no) => {

            let data = {};

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
    },
    update: (id, data, cb) => {
        No.update({'_id': id}, {$set: data}, (err) => {

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
        No.findByIdAndRemove(id, (err) => {

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
