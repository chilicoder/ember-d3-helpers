import Ember from 'ember';

export function d3Noop() {
  return (d3el) => d3el;
}

export default Ember.Helper.helper(d3Noop);
