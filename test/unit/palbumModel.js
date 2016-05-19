'use strict';

const supertest = require('supertest');
const expect = require('chai').expect;

let app = require('../../app');
let db = require('../../config/db');

beforeEach(function(cb) {
  db.run('DELETE FROM todos', function(err) {
    if(err) return cb(err);
    db.run(`INSERT INTO todos (createdAt, dueDate, desc)
            VALUES (1463607825851, 1463607835851, "Write tests")`, cb);
  });
});
