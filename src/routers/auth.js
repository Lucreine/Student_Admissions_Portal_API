const express = require('express');

const { login} = require('../controllers/auth.js');

const router = express.Router();

router.post('/', login);


module.exports = router;


