'use strict';

const supertest = require('supertest');
const expect = require('chai').expect;

let app = require('../../app');
let db = require('../../config/db');

var mongoose = require('mongoose');
var Palbum = require('../../models/palbum');

var server = require('../../app');

const MONGOURL = 'mongodb://localhost:/pa-app';

beforeEach(function(cb) {

  // mongoose.connection.close(function() {
  //   mongoose.connect(MONGOURL, cb);
  // });

  var newPalbum = new Palbum({
      imagename: 'Nature 1',
      imageurl: 'http://www.planwallpaper.com/static/images/038a514bc31420cbff45bac3303672a9_large.jpg'
    });
    newPalbum.save(function(err) {
       cb();
    });
});

afterEach(function(cb){
  Palbum.collection.drop();
  mongoose.connection.close(cb);
 });

describe('Palbum', function() {

  before(function(cb) {
    mongoose.connection.close(function() {
      mongoose.connect(MONGOURL, cb);
    });
  });

    describe('create()', function() {
      it('should retrieve the Palbum from the model.', function(cb) {

        var newPalbum = new Palbum({
            imagename: 'Nature 2',
            imageurl: 'http://www.planwallpaper.com/static/images/038a514bc31420cbff45bac3303672a9_large.jpg'
          });

          Palbum.create(newPalbum, function(err, palbum) {
            expect(palbum).to.exist;
            cb();
           });
      });
    });

    describe('.get()', function() {
    it('should retrieve the Palbum from the model.', function(cb) {

       Palbum.find({}, (err, albums) => {
          // expect(albums).to.exist;
          expect(albums).to.have.length(1);
          cb();
         });

      });
    });

    describe('.delete()', function() {
    it('should delete the Palbum from the model.', function(cb) {

       Palbum.remove({}, (err, albums) => {
          expect(err).to.not.exist;
          cb();
         });

      });
    });


    // Errorrrrrrrrrrrrrrrrr
    // describe('.findByIdAndUpdate()', function() {
    //
    //   var newPalbum = new Palbum({
    //     imagename: 'Nature 3',
    //     imageurl: 'http://www.planwallpaper.com/static/images/038a514bc31420cbff45bac3303672a9_large.jpg'
    //   });
    //
    //    Palbum.findByIdAndUpdate('573d667167c867272f529c6f', { imagename: newPalbum.imagename }, (err, albums) => {
    //       expect(err).to.not.exist;
    //       cb();
    //      });
    //  });

    after(function(cb) {
      mongoose.connection.close(cb);
    });

});
