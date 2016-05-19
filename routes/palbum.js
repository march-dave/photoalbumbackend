var express = require('express');
var router = express.Router();

var Palbum = require('../models/palbum');

router.route('/')
    .get((req, res) => {
      Palbum.find({}, (err, bids) => {
          if(err) {
            res.status(400).send(err);
          } else {
            res.send(bids);
          }
        });
    })
    .post((req, res) => {
      var palbum = new Palbum(req.body);
      palbum.save((err, savedPalbum) => {
        res.status(err ? 400 : 200).send(err || savedPalbum);
      });
  });

  router.put('/:id', (req, res) => {
    Palbum.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, palbum) => {
      if(err) {
        res.status(400).send(err);
      } else {
        res.send();
      }
    });
  });


  router.delete('/:id', (req, res) => {
    Palbum.findByIdAndRemove(req.params.id, (err, palbum) => {
      if(err) {
        res.status(400).send(err);
      } else {
        res.send();
      }
    });
  });

module.exports = router;
