import Ember from 'ember';

export default Ember.Controller.extend({
  saveEdit(chore, formValues) {
    chore.setProperties(formValues);

    chore.save().then(() => {
      this.transitionToRoute(`dashboard.parent.chores.index`);
    });
  },
});
