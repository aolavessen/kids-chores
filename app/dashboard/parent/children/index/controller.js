import Ember from 'ember';

export default Ember.Controller.extend({
  delete(child) {
    if (confirm('Are you sure you want to delete?')) {
      child.destroyRecord();
    }
  },
});
