import Ember from 'ember';

export default Ember.Controller.extend({
  addChild(formValues) {
    const post = this.store.createRecord('child', formValues);

    post.save().then(() => {
      this.transitionToRoute('dashboard.parent.children.index');
    });
  },
});
