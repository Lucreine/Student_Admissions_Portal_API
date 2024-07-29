const authModels = require('../models/usersModels');

const login = async () => {
    return await authModels.find();
}


module.exports = {
    login
};