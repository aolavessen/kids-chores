import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  loginChild(params) {
    this.get(`session`).authenticate(`authenticator:child`, params.email, params.password)
    .then(() => {
      this.transitionToRoute(`dashboard.child`);
    })
    .catch((reason) => {
      console.log(reason);
    });
  },
});
