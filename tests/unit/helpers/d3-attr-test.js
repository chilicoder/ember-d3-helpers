import { d3Attr } from 'dummy/helpers/d3-attr';
import { test } from 'qunit';
import d3UnitModule from '../../helpers/d3-unit-helper';

d3UnitModule('Unit | Helper | d3 attr');

test('it returns a function', function(assert) {
  assert.equal(typeof d3Attr(['r', 10]), 'function');
});


test('attribute helper', function(assert) {
  let { d3Selection } = this;
  
  assert.ok(d3Selection.attr, 'has attr method');
  
  assert.equal(d3Selection.attr('opacity'), null, 'does not have attribute before setting');

  d3Attr(['opacity', '1.0'])(d3Selection);
  assert.equal(d3Selection.attr('opacity'), 1.0, 'attribute can be set');

  d3Attr(['opacity', '0.2'])(d3Selection);
  assert.equal(d3Selection.attr('opacity'), 0.2, 'attribute can be changed');
});
