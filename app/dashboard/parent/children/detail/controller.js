import Ember from 'ember';

export default Ember.Controller.extend({
  saveAssignment(formValues) {
    const post=this.store.createRecord(`assignment`, formValues);

    post.save().then(() => {
      this.transitionToRoute(`dashboard.parent.child`);
    });
  },
  isComplete(assignment) {
    const disabled = assignment.isComplete;
    assignment.toggleProperty(`done`);
    assignment.save();
  }

});
