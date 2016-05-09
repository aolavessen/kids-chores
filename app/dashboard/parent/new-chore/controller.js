import Ember from 'ember';

export default Ember.Controller.extend({
  createNewChore(attr) {
    const chore=this.store.createRecord(`chore`, attr);

    chore.save().then(() => {
      this.transitionToRoute(`dashboard.parent`)
    });
  },
});
