import Ember from 'ember';

export default Ember.Controller.extend({


  isComplete(assignment) {
    const disabled = assignment.isComplete;
    assignment.toggleProperty(`done`);
    assignment.save().then(() => {
      this.transitionToRoute(`dashboard.child.assignment`);
    });
  }
});
