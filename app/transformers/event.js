var Mystique = require('mystique');

var EventTransformer = Mystique.Transformer.extend({
  resourceName: 'event',
  mapOut: function(event) {
    return {
      id: event.id,
      name: event.name,
      email: event.email,
      phone: event.phone,
      startDate: event.startDate,
      endDate: event.endDate,
      url: event.url,
      location: event.location,
      description: event.description,
      active: event.active,
      featured: event.featured,
      region: event.region,
    };
  },

  mapIn(req) {
    return {
      name: req.getJson('event.name'),
      email: req.getJson('event.email'),
      phone: req.getJson('event.phone'),
      startDate: req.getJson('event.startDate'),
      endDate: req.getJson('event.endDate'),
      url: req.getJson('event.url'),
      location: req.getJson('event.location'),
      description: req.getJson('event.description'),
      active: req.getJson('event.active'),
      featured: req.getJson('event.featured'),
      region: req.getJson('event.region'),
    };
  },
});

Mystique.registerTransformer('Event', EventTransformer);
