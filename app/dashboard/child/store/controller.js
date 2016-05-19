import Ember from 'ember';

export default Ember.Controller.extend({
  currentUser: Ember.inject.service(),

  buyReward(reward) {
    const child = this.get(`currentUser.user`);

    if (child.get(`pointTotal`) >= reward.get(`points`)) {
      const purchase = this.store.createRecord(`purchase`, { reward, child });

      purchase.save().then(() => {
        child.decrementProperty(`pointTotal`, reward.get(`points`));

        child.save();
      });
    } else {
      return alert (`Sorry, but you don't have enough points`);
    }

  //   isComplete(reward) {
  //     const purchased = reward.isComplete;
  //     reward.toggleProperty(`done`);
  //     reward.save().then(() => {
  //       this.transitionToRoute(`dashboard.child.assignment`);
  //     });
  //   },
  },
});
