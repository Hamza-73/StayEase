const express = require('express');
const { loginUser, registerUser, getProfile } = require("../controller/user.controller");
const router = express.Router();

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('get-user-profile', getProfile)

module.exports = router;