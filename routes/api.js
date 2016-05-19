'use strict';

var express = require('express');
var router = express.Router();

router.use('/palbum', require('./palbum'));

module.exports = router;
