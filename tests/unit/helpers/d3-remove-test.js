import { d3Remove } from 'dummy/helpers/d3-remove';
import { test } from 'qunit';
import d3UnitModule from '../../helpers/d3-unit-helper';

d3UnitModule('Unit | Helper | d3 remove');

test('it returns a function', function(assert) {
  assert.equal(typeof d3Remove(), 'function');
});

test('it works', function(assert) {
  let { d3Selection, isSelection } = this;
  let removed = d3Remove()(d3Selection);
  assert.ok(isSelection(removed), 'returns a selection');
});

