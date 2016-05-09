import Ember from 'ember';

export default Ember.Controller.extend({
  createNewChild(attr) {
    const child=this.store.createRecord(`child`, attr);

    child.save().then(() => {
      this.transitionToRoute(`dashboard.parent`)
    });
  },
});
