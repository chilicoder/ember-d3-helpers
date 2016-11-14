import { d3TimeFormat } from 'dummy/helpers/d3-time-format';
import { module, test } from 'qunit';

module('Unit | Helper | d3 time format');

test('it works', function(assert) {
  let formatter = d3TimeFormat([ '%B %d, %Y' ]);
  assert.equal(formatter(new Date('2011-10-02')), 'October 01, 2011');
});

