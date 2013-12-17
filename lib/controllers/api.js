'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing'),
    Sentence = mongoose.model('Sentence'),
    async = require('async');

// TODO: wipe out all 'awesomeThings'
exports.awesomeThings = function(req, res) {
  return Thing.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};

exports.sentences = function(req, res) {
  return Sentence.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};
