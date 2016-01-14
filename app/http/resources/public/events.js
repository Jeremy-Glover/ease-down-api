// Module dependencies.
var express = require('express');
var router = express.Router();
var api = {};

// ALL
api.events = function(req) {
  return req.store.recordCollection('Event', { queryBy: ['region', 'active', 'featured'] });
};

// GET
api.event = function(req) {
  return req.store.recordItemById('Event', req.params.id);
};

// POST
api.addEvent = function(req) {
  return req.store.createRecord('Event');
};

// PUT
api.editEvent = function(req) {
  return req.store.updateRecord('Event', req.params.id);
};

// DELETE
api.deleteEvent = function(req) {
  return req.store.destroyRecord('Event', req.params.id);
};

router.get('/events', api.events);
router.post('/events', api.addEvent);

router.route('/events/:id')
  .get(api.event)
  .put(api.editEvent)
  .delete(api.deleteEvent);

module.exports = router;
