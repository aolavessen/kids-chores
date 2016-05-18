import Ember from 'ember';

export default Ember.Controller.extend({
  saveAssignment(formValues) {
    const post=this.store.createRecord(`assignment`, formValues);

    post.save().then(() => {
      this.transitionToRoute(`dashboard.parent.child`);
    });
  },
  isComplete(assignment, child) {
    assignment.toggleProperty(`approve`);
    assignment.save();

    var points = chore.points
    // Look up points from the chore
    // Increase child point total
    // Save child
  }
});
