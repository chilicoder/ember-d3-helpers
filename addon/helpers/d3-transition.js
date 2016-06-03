import Ember from 'ember';

export function d3Transition([ transition ]) {
  return function(d3el){
    return d3el.transition(transition);
  };
}

export default Ember.Helper.helper(d3Transition);
