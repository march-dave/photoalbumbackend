'use strict';

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var expect = require('chai').expect;

// var db = require('../../config/db');
var Palbum = require('../../models/palbum');

var app = require('../../app');

const supertest = require('supertest');

const MONGOURL = 'mongodb://localhost:/pa-app';

beforeEach(function(cb) {
  // var newPalbum = new Palbum({
  //   imagename: 'Nature 1',
  //   imageurl: 'http://www.planwallpaper.com/static/images/038a514bc31420cbff45bac3303672a9_large.jpg'
  // });
  // newPalbum.save(function(err) {
  //    cb();
  // });
});

afterEach(function(cb){
  //  Palbum.collection.drop();
  //  mongoose.connection.close(cb);
 });

describe('/Palbum', function() {

  before(function(cb) {
    mongoose.connection.close(function() {
      mongoose.connect(MONGOURL, cb);
    });
  });

 describe('GET /', () => {
    it('should list ALL palbum from the mongodb Route', function(cb) {
    supertest(app)
      .get('api/palbum')
      .end(function(err, res){

        expect(err).to.not.exist;
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.have.length(1);
        cb();

      });
    });
  });

  //// Errorrrrrrrrrrrrrrrrr
  // describe('POST /', () => {
  //   it('should create a new palbum.', cb => {
  //     supertest(app)
  //       .post('api/palbum')
  //       .send({imagename: 'Natural CRUD test', imageurl: 'http://e.jpg'})
  //       .end((err, res) => {
  //         expect(err).to.not.exist;
  //         expect(res.statusCode).to.equal(200);
  //         cb();
  //       });
  //   });
  // });

  // describe('DELETE /', () => {
  //    it('should delete ALL palbum from the mongodb Route', function(cb) {
  //    supertest(app)
  //      .delete('api/palbum')
  //      .end(function(err, res){
  //         // expect(err).to.not.exist;
  //       //  expect(res.statusCode).to.equal(200);
  //       //  expect(res.body).to.have.length(1);
  //        cb();
  //      });
  //    });
  //  });

  // describe('.get()', function() {
  //   it('should retrieve the palbum from the mongodb.', function(cb) {
  //     supertest(app)
  //     Palbum.get(function(err, palbums) {
  //       expect(err).to.not.exist;
  //       expect(palbums).to.have.length(1);
  //       expect(palbums[0].desc).to.equal('Write tests');
  //
  //       cb();
  //     });
  //   });
  // });


  after(function(cb) {
    mongoose.connection.close(cb);
  });

});

// router.route('/')
//     .get((req, res) => {
//       Palbum.find({}, (err, bids) => {
//           if(err) {
//             res.status(400).send(err);
//           } else {
//             res.send(bids);
//           }
//         });
//     })
//     .post((req, res) => {
//       var palbum = new Palbum(req.body);
//       palbum.save((err, savedPalbum) => {
//         res.status(err ? 400 : 200).send(err || savedPalbum);
//       });
//   });
