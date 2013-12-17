'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing'),
    Sentence = mongoose.model('Sentence');

// TODO: ask what is this line mean? 
// Sentence.create({word: "aaaa"})

Sentence.find({}).remove(function() {
  Sentence.create({
    url: "http://yahoo.com",
    title: "YAHOO!",
    words: ["word", "difficult"],
    sentence: "This is a difficult word",
  }, {
    url: "http://google.com",
    title: "Google",
    words: ["exterminate", "annihilate", "destroy"],
    sentence: "Is this a difficult word?",
  }, function(err) {
    console.log('finished populating things');
  });
});

Thing.find({}).remove(function() {
	Thing.create({ 
		name : 'HTML5 Boilerplate',
		info : 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.',
		awesomeness: 10
	}, {
		name : 'AngularJS',
		info : 'AngularJS is a toolset for building the framework most suited to your application development.',
		awesomeness: 10
	}, {
		name : 'Karma',
		info : 'Spectacular Test Runner for JavaScript.',
		awesomeness: 10
	}, {
		name : 'Express',
		info : 'Flexible and minimalist web application framework for node.js.',
		awesomeness: 10
	}, {
		name : 'MongoDB + Mongoose',
		info : 'An excellent document database. Combined with Mongoose to simplify adding validation and business logic.',
		awesomeness: 10
	}, function(err) {
			console.log('finished populating things');
		}
	);
});