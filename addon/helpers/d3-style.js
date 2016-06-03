import Ember from 'ember';

export function d3Style([ attribute, value ]) {
  return function(d3el) {
    return d3el.style(attribute, value);
  };
}

export default Ember.Helper.helper(d3Style);
