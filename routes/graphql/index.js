const express = require('express');
const router = express.Router();

const USERS_ROUTER = require('./users/users');

router.use('/users', USERS_ROUTER);

module.exports = router;
