const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userModels = require('../models/usersModels.js');


const login = async(req,res) => {
    const{email, password} = req.body;
    try{
        const user = await userModels.findOne({ where: {email} });
        console.log(user);
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: 'Invalid credentials' });
          }

        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json(token);
        
    }catch(err){
        console.error(err);
        res.status(500).json({ error: err.message });
    };   
}

module.exports = {
    login
};

