import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service(),

  model() {
    const chore = this._super(...arguments);
    const children = this.store.query(`child`, {
      filter: {
        where: {
          parentId: this.get(`currentUser.id`),
        },
      },
    });

    return Ember.RSVP.hash({ chore, children });
  },
});
