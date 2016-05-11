import Ember from 'ember';

export default Ember.Controller.extend({
  saveChoreEdit(formValues) {
    const post = this.store.createRecord('chore', formValues);

    post.save().then(() => {
      this.transitionToRoute(`dashboard.parent.chores.index`);
    });
  },
});
