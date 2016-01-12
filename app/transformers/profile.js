var Mystique = require('mystique');

var ProfileTransformer = Mystique.Transformer.extend({
  resourceName: 'profile',
  mapOut: function(profile) {
    return {
      id: profile.id,
      email: profile.email,
      roles: profile.roles,
      firstName: profile.firstName,
      lastName: profile.lastName,
    };
  },

  mapIn(req) {
    return {
    };
  },
});

Mystique.registerTransformer('Profile', ProfileTransformer);
