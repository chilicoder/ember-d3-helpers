import Ember from 'ember';
import { format } from 'd3-format';

export function d3Format([ specifier ]) {
  return format(specifier);
}

export default Ember.Helper.helper(d3Format);
