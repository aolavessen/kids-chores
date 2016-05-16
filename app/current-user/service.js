import Ember from 'ember';

export default Ember.Service.extend({
  user: null,

  unknownProperty(key) {
    return this.get(`user.${key}`);
  },
});
