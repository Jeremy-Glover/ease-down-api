var Mystique = require('mystique');

var EventTransformer = Mystique.Transformer.extend({
  resourceName: 'event',
  mapOut: function(event) {
    return {
      id: event.id,
      name: event.name,
      email: event.email,
      phone: event.phone,
      dates: event.dates,
      url: event.url,
      location: event.location,
      description: event.description,
      active: event.active,
    };
  },

  mapIn(req) {
    return {
      name: req.getJson('event.name'),
      email: req.getJson('event.email'),
      phone: req.getJson('event.phone'),
      dates: req.getJson('event.dates'),
      url: req.getJson('event.url'),
      location: req.getJson('event.location'),
      description: req.getJson('event.description'),
      active: req.getJson('event.active'),
    };
  },
});

Mystique.registerTransformer('Event', EventTransformer);
