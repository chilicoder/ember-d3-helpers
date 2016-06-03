import Ember from 'ember';

export function d3Text([ callback ]) {
  return (d3el) => d3el.text(callback);
}

export default Ember.Helper.helper(d3Text);
