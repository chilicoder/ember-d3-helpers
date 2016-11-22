import Ember from 'ember';
import { d3Area } from 'dummy/helpers/d3-area';
import { module, test } from 'qunit';

module('Unit | Helper | d3 area');

const { K } = Ember;

test('it works', function(assert) {
  let options = {
    xAccessor: K,
    yAccessor: K
  };

  let area = d3Area([K, K], options);
  assert.equal(typeof area, 'function', 'returns a function');
});
