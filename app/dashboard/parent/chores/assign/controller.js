import Ember from 'ember';

export default Ember.Controller.extend({
  assignChore(chore, { childId }) {
    this.store.findRecord(`child`, childId).then((child) => {
      const assign = this.store.createRecord(`assignment`, { child });
      assign.set(`chore`, chore);

      return assign.save();
    }).then(() => {
      this.transitionToRoute(`dashboard.parent.chores`);
    });
  },
});
