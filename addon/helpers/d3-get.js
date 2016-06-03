import Ember from 'ember';

const { get } = Ember;

export function d3Get([ key ]) {
  return function(d){
    if (!key) {
      return d;
    } else {
      return get(d, key);
    }
  };
}

export default Ember.Helper.helper(d3Get);
