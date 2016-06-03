import Ember from 'ember';

export function d3Append([ selector ]) {
  return (d3el) => d3el.append(selector);
}

export default Ember.Helper.helper(d3Append);
