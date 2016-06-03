import { d3Noop } from 'dummy/helpers/d3-noop';
import { test } from 'qunit';
import d3UnitModule from '../../helpers/d3-unit-helper';

d3UnitModule('Unit | Helper | d3 noop');

test('it returns a function', function(assert) {
  assert.equal(typeof d3Noop(), 'function');
});

test('it works', function(assert) {
  let { d3Selection } = this;
  let result = d3Noop()(d3Selection);
  assert.deepEqual(result, d3Selection, 'returns unchanged selection');
});
