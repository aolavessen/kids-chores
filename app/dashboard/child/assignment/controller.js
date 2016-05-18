import Ember from 'ember';

export default Ember.Controller.extend({
  delete(assignment) {
    if (confirm('Are you sure you want to delete?')) {
      assignment.destroyRecord();
    }
  },

  isComplete(assignment) {
    const disabled = assignment.isComplete;
    assignment.toggleProperty(`done`);
    assignment.save().then(() => {
      this.transitionToRoute(`dashboard.child.assignment`);
    });
  }
});
