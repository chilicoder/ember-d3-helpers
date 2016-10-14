import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('bar-chart');
  this.route('color-picker');
  this.route('area-chart');
});

export default Router;
