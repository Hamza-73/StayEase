const express = require('express')
const router = express.Router();

const { exampleRoute } = require('../controller/user.controller');

router.post('/example-route',  exampleRoute );

module.exports = router;