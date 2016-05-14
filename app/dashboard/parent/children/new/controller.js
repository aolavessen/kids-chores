import Ember from 'ember';

export default Ember.Controller.extend({
  addChild(formValues) {
    const foo = this.store.createRecord('child', formValues);

    foo.save().then(() => {
      this.transitionToRoute(`dashboard.parent.children.index`);
    });
  },
});
