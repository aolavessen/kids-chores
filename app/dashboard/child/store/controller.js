import Ember from 'ember';

export default Ember.Controller.extend({
  currentUser: Ember.inject.service(),

  buyReward(reward) {
    const child = this.get(`currentUser.user`);

    if (child.get(`pointTotal`) >= reward.get(`points`)) {
      child.decrementProperty(`pointTotal`, reward.get(`points`));

      child.save();
    } else {
      return alert ("Sorry, but you don't have enough points");
    }
  },
});
