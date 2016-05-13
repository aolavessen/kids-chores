import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      name: '',
      description: '',
      avatar: '',
      points: '',
      date: '',
    };
  },
});
