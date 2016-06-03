import Ember from 'ember';

export function d3Call([ callback ]) {
  return function(d3el) {
    return d3el.call(callback);
  };
}

export default Ember.Helper.helper(d3Call);
