import Ember from 'ember';

export function d3SelectAll([selector]) {
  return function(d3el) {
    // if (Ember.typeOf(d3el) === 'string') {
    //   d3el = selectAll(d3el);
    // }
    return d3el.selectAll(selector);
  };
}

export default Ember.Helper.helper(d3SelectAll);
