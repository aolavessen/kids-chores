import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  model() {
    const childId = this.get(`session.data.authenticated.user.id`);

    return this.store.findRecord(`child`, childId);
  },


});
