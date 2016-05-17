/* eslint-disable */

import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login', function() {
    this.route('child');
  });
  this.route('sign-up');
  this.route('logout');
  this.route('dashboard', function(){

    this.route('parent', function(){
      this.route('children', function() {
        this.route('new');
        this.route('edit', {
          path:'/:id/edit'
        });

        this.route('detail', {
          path: '/:id'
        });
      });
      this.route('chore');
      this.route('chores', function() {
        this.route('new');
        this.route('edit', {
          path: '/:id'
        });
        this.route('assign', {
          path: '/:chore_id/assign'
        });
      });

      this.route('rewards', function() {
        this.route('new');
        this.route('edit', {
          path: '/:id'
        });
      });

      this.route('reward', {
        path: '/:reward_id'
      }, function() {
        this.route('assign', {
          path: '/:reward_id'
        });
      });
    });
    this.route('child', function(){
      this.route('chore');
      this.route('store');
      this.route('assignment', function() {
        this.route('edit');
      });
      this.route('purchase');
    });
  });

  this.route('login-child');
});

export default Router;
