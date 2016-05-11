import Ember from 'ember';

export default Ember.Controller.extend({
  createNewReward(attr) {
    const reward=this.store.createRecord(`reward`, attr);

    reward.save().then(() => {
      this.transitionToRoute(`dashboard.parent`)
    });
  },
});
