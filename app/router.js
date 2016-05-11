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
    this.route('parent', function(){
      this.route('new-chore', function() {
        this.route('new-chore-item');
      });
      this.route('new-reward', function() {
        this.route('new-reward-item');
      });
      this.route('newChild');
      this.route('chore');
      this.route('chores', function() {
        this.route('new');

        this.route('edit', {
          path: '/:id'
        });
      });

      this.route('rewards', function() {
        this.route('new');

        this.route('edit', {
          path: '/:id'
        });
      });
    });
    this.route('child', function(){
      this.route('chore');
      this.route('store');
      this.route('assignment');
      this.route('purchase');
    });
  });
});

export default Router;
