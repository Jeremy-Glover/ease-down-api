'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var relationship = require('mongoose-relationship');

var fields = {
  name: { type: String },
  email: { type: String },
  phone: { type: Number },
  dates: { type: String },
  url: { type: String },
  location: { type: String },
  description: { type: String },
  active: { type: Boolean },
};

var EventSchema = new Schema(fields);



module.exports = mongoose.model('Event', EventSchema);
