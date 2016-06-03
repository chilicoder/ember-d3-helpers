import Ember from 'ember';

export function d3Join([selector, data, accessor], { enter, update, exit }) {
  return function(d3el){
    let joined = d3el.selectAll(selector).data(data, accessor);

    if (update) {
      update(joined);
    }

    if (enter) {
      joined.enter().call(enter);
    }

    if (exit) {
      joined.exit().call(exit);
    }
    return d3el;
  };
}

export default Ember.Helper.helper(d3Join);
