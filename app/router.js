import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('sign-up');
  this.route('dashboard', {path:'/'}, function(){
    this.route('logout');
    //add .transitionTo to the logout route.js
    this.route('parent', {path: '/'}, function(){
      this.route('new-chore');
      this.route('new-reward');
    });
    this.route('child', {path:'/'}, function(){
      this.route('chore');
      this.route('store');
    });
  });
});

export default Router;
