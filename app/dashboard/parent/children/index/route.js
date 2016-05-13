import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll(`child`);
<<<<<<< HEAD
  },
=======
  }
>>>>>>> 90280756d6beb1336ca35906a0c0fbddcb9f5812
});
