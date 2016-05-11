import Ember from 'ember';

export default Ember.Controller.extend({
  saveReward(reward, formValues) {
    reward.setProperties(formValues);
    reward.save().then(() => {
      this.transitionToRoute(`dashboard.parent.rewards.index`);
    });
  },
});
