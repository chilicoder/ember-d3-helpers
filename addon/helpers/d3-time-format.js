import Ember from 'ember';
import { timeFormat } from 'd3-time-format';

export function d3TimeFormat([ specifier ]) {
  return timeFormat(specifier);
}

export default Ember.Helper.helper(d3TimeFormat);
