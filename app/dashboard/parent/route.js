import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  currentUser: Ember.inject.service(),

  model() {
    const parentId = this.get(`session.data.authenticated.user.id`);

    return this.store.findRecord(`parent`, parentId);
  },

  afterModel(model) {
    // Sets the current user to the logged in parent!
    this.set(`currentUser.user`, model);
  },
});
