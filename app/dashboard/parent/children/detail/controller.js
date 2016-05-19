
export default Ember.Controller.extend({
  saveAssignment(formValues) {
    const post=this.store.createRecord(`assignment`, formValues);

    post.save().then(() => {
      this.transitionToRoute(`dashboard.parent.child`);
    });
  },

  assignmentIsApproved(assignment, child) {
    assignment.toggleProperty(`approved`);
    assignment.save();

    // Look up points from the chore
    const points = assignment.get(`chore.points`);
    // Increase child point total
    child.incrementProperty('pointTotal', points);
    // Save child
    child.save();
  },

  purchaseIsFulfilled(purchase) {
    purchase.toggleProperty(`fulfilled`);
    purchase.save();
  },

  delete(item) {
    if (confirm('Are you sure you want to delete?')) {
      item.destroyRecord();
    }
  },
});
