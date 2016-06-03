import Ember from 'ember';

export function emberD3HelpersInvoke([callback, ...args]) {
  callback.apply(null, args);
}

export default Ember.Helper.helper(emberD3HelpersInvoke);
