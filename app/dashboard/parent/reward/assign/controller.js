import Ember from 'ember';

export default Ember.Controller.extend({
  assignReward(reward, formValues) {
    const assign = this.store.createRecord(`purchase`, formValues);
    assign.set(`reward`, reward);

    assign.save()
      .then(() => {
        this.transitionToRoute(`dashboard.parent.reward`);
      });
  },
});
