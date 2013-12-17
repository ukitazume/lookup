'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
// Schema
var SentenceSchema = new Schema({
  url: {type: String, index: true},  
  title: {type: String},  
  words: {type: Array},  
  sentence: {type: String},  
  user_id: {type: Schema.ObjectId},  
  private: {type: Boolean, default: false},  
  created: {type: Date, default: Date.now, required: true}  
});


mongoose.model('Sentence', SentenceSchema);
