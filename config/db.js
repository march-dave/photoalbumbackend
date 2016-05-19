'use strict';

if(process.env.TESTING) {
  const MONGOURL = 'mongodb://localhost:/test-pa-app';
} else {
  const MONGOURL = process.env.MONGODB_URI;
}

// const mongoose = require('mongoose');
// const dbUrl = 'mongodb://localhost/photo-album-test';
//
// before(function(cb) {
//   mongoose.connection.close(function() {
//     mongoose.connect(dbUrl, cb);
//   });
// });
//
// after(function(cb) {
//   mongoose.connection.close(cb);
// });
