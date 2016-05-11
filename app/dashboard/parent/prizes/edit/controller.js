import Ember from 'ember';

export default Ember.Controller.extend({
  savePrize(reward, formValues) {
    reward.setProperties(formValues);
    reward.save().then(() => {
      this.transitionToRoute(`dashboard.parent.prizes.index`);
    });
  },
});
