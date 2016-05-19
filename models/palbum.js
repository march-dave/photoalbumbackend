'use strict';

var mongoose = require('mongoose');

var palbumSchema = new mongoose.Schema({
    imagename: {type: String},
    imageurl: {type: String}
});

var Palbum = mongoose.model('Palbum', palbumSchema);
module.exports = Palbum;
