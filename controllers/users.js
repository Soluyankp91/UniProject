const getHttpErrorCode = require('../miscellaneous/exception_handler');
const repository = require('../repository/users');

module.exports = {

    async checkUserData(req, res, next) {
        if (typeof req.body.name === 'string' && req.body.name !== '' &&
            typeof req.body.surname === 'string' && req.body.surname !== '' &&
            typeof req.body.middlename === 'string' && req.body.middlename !== '' &&
            typeof req.body.ipn === 'number' &&
            typeof req.body.passport === 'number')
        {
            next();
        }
        else {
            res.sendStatus(400);
        }
    },

    async createUser(req, res) {
        const user = {
            name: req.body.name,
            surname: req.body.surname,
            middlename: req.body.middlename,
            ipn: req.body.ipn,
            passport: req.body.passport,
            birthDate: req.body.birthDate
        }
        repository.createUser(user)
            .then(savedUser => {
                //res.set('Authorization', 'Token ' + token);
                res.json(savedUser);
            })
            .catch(e => {
                res.sendStatus(getHttpErrorCode(e));
            })
    },

    async getUserById(req, res, next) {
        if (typeof req.params.id !== 'string' && req.params.id === "") {
            res.sendStatus(400);
        }
        repository.getUserById(req.params.id)
            .then(user => {
                if (user === null || user === undefined) {
                    return Promise.reject({code: 'P404'});
                }
                return user;
            })
            .then(user => {
                res.json(user);
            })
            .catch(e => {
                res.sendStatus(getHttpErrorCode(e));
            })
    },

    async updateUser(req, res) {
        const user = {
            id: req.body.id,
            name: req.body.name,
            surname: req.body.surname,
            middlename: req.body.middlename,
            ipn: req.body.ipn,
            passport: req.body.passport,
            birthDate: req.body.birthDate
        }
        repository.updateUser(user)
            .then(user => {
                if (user === null || user === undefined) {
                    return Promise.reject({code: 'P404'});
                }
                return user;
            })
            .then(user => {
                res.json(user);
            })
            .catch(e => {
                res.sendStatus(getHttpErrorCode(e));
            })
    }
}