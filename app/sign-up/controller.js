import Ember from 'ember';

export default Ember.Controller.extend({

  createNewUser(attr) {
    const user = this.store.createRecord(`parent`, attr);

    user.save().then(() => {
      this.transitionToRoute(`login`);
    });
  },
});
