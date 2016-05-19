import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  currentUser: Ember.inject.service(),

  model() {
    const childId = this.get(`session.data.authenticated.user.id`);

    return this.store.findRecord(`child`, childId);
  },

  afterModel(model) {
    // Sets the current user to the logged in parent!
    this.set(`currentUser.user`, model);
  },
});
