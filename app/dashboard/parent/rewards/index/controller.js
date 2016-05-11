import Ember from 'ember';

export default Ember.Controller.extend({
  delete(reward) {
    if (confirm(`Are you sure you want to delete that?`)) {
      reward.destroyRecord();
    }
  },
});
