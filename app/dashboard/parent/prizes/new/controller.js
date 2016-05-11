import Ember from 'ember';

export default Ember.Controller.extend({
  savePrize(formValues) {
    const post=this.store.createRecord(`reward`, formValues);

    post.save().then(() => {
      this.transitionToRoute(`dashboard.parent.prizes.index`);
    });
  },
});
