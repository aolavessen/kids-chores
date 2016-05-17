import Ember from 'ember';

export default Ember.Controller.extend({
  assignChore(chore, formValues) {
    const assign = this.store.createRecord(`assignment`, formValues);
    assign.set(`chore`, chore);

    assign.save()
      .then(() => {
        this.transitionToRoute(`dashboard.parent.chores`);
      });
  },
});
