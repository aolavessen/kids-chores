
export default Ember.Controller.extend({
  saveAssignment(formValues) {
    const post=this.store.createRecord(`assignment`, formValues);

    post.save().then(() => {
      this.transitionToRoute(`dashboard.parent.child`);
    });
  },
  isComplete(assignment, child) {
    assignment.toggleProperty(`approved`);
    assignment.save();

    // Look up points from the chore
    const points = assignment.get(`chore.points`);
    // Increase child point total
    child.incrementProperty('pointTotal', points);
    // Save child
    child.save();
  },

  isComplete(purchase, reward) {
    purchase.toggleProperty(`fulfilled`);
    fulfilled.save();
  },

  delete(assignment) {
    if (confirm('Are you sure you want to delete?')) {
      assignment.destroyRecord();
    }
  },
});
