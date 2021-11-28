const express = require('express');
const router = express.Router();
const controller = require('../controllers/users');

router.use(express.urlencoded({extended: true}));

router.get('/:id', controller.getUserById);


router.put('/'/*, check Token here*/, controller.checkUserData, controller.updateUser);

module.exports = router;