import { d3SelectAll } from 'dummy/helpers/d3-select-all';
import { test } from 'qunit';
import d3UnitModule from '../../helpers/d3-unit-helper';

d3UnitModule('Unit | Helper | d3 select-all');

test('it returns a function', function(assert) {
  assert.equal(typeof d3SelectAll(['circle']), 'function');
});

test('it works', function(assert) {
  let { d3Selection, isSelection } = this;
  let circles = d3SelectAll([ 'circle '])(d3Selection);
  assert.ok(isSelection(circles), 'returns a selection');
});
