import Ember from 'ember';

export function emberD3HelpersLogDebug([ msg ]) {
  return function(value) {
    // debugger
    console.log(`${msg}: `, value);
    return value;
  };
}

export default Ember.Helper.helper(emberD3HelpersLogDebug);
