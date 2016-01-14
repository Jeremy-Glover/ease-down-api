'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var relationship = require('mongoose-relationship');

var fields = {
  name: { type: String },
  email: { type: String },
  phone: { type: Number },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, default: Date.now },
  url: { type: String },
  location: { type: String },
  description: { type: String },
  active: { type: Boolean },
  region: { type: String },
};

var EventSchema = new Schema(fields);

module.exports = mongoose.model('Event', EventSchema);
