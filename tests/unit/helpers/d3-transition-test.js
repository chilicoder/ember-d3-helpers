import { d3Transition } from 'dummy/helpers/d3-transition';
import { test } from 'qunit';
import d3UnitModule from '../../helpers/d3-unit-helper';
import { transition } from 'd3-transition';

d3UnitModule('Unit | Helper | d3 transition');

test('it returns a function', function(assert) {
  assert.equal(typeof d3Transition([ transition ]), 'function');
});

test('it works', function(assert) {
  let { d3Selection } = this;
  let { constructor } = transition;  
  let transitionSelection = d3Transition([ transition() ])(d3Selection);

  assert.ok(d3Selection.transition, 'the selection has a transition method');
  assert.ok(transitionSelection.constructor instanceof constructor, 'returns a transition class');
});
