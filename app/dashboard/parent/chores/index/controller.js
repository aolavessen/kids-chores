import Ember from 'ember';

export default Ember.Controller.extend({
  delete(chore) {
    if (confirm('Are you sure you want to delete?')) {
      chore.destroyRecord();
    }
  },
});
