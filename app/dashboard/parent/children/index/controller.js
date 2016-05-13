import Ember from 'ember';

export default Ember.Controller.extend({
  createNewChild(formValues) {
    const child = this.store.createRecord('child', formValues);

    child.save().then(() => {
      this.transitionToRoute('dashboard.parent')
    });
  },
});