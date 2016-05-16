import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service(),

  model() {
    return this.store.query(`child`, {
      filter: {
        where: {
          parentId: this.get(`currentUser.id`),
        },
      },
    });
  },
});
