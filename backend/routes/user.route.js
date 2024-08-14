const express = require('express');
const { exampleRoute } = require("../controller/user.controller");
const router = express.Router();

router.post("/example-route", exampleRoute )

module.exports = router;