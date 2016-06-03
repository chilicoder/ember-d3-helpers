import Ember from 'ember';

export function d3Attr([ attribute, value ]) {
  return function(d3el) {
    return d3el.attr(attribute, value);
  };
}

export default Ember.Helper.helper(d3Attr);
