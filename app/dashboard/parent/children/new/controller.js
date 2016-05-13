import Ember from 'ember';

export default Ember.Controller.extend({
  saveEdit(child, formValues) {
    child.setProperties(formValues);

    child.save().then(() => {
      this.transitionToRoute(`dashboard.parent.children`);
    });
  },
});
