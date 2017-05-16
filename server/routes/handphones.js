const express = require('express');
var router = express.Router();
var controller = require('../controllers/handphoneController');
var jwtHelper = require('../helpers/jwt')

router.get('/',jwtHelper.jwtAuthenticate,controller.findHandphones);
router.post('/',controller.addHandphone);
router.delete('/',controller.deleteHandphone);
router.put('/',controller.updateHandphone);

module.exports = router;