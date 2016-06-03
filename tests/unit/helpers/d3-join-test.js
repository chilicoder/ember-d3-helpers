import { d3Join } from 'dummy/helpers/d3-join';
import { test } from 'qunit';
import d3UnitModule from '../../helpers/d3-unit-helper';
import sinon from 'sinon';

d3UnitModule('Unit | Helper | d3 join');

test('it returns a function', function(assert) {
  assert.equal(typeof d3Join([], {enter: '', exit: '', update: ''}), 'function');
});

test('it works', function(assert) {
  let { d3Selection, isSelection } = this;

  let data = [];
  let enter = sinon.spy();
  let exit = sinon.spy();
  let update = sinon.spy();
  
  let join = d3Join(['circle', data], { enter, exit, update })(d3Selection);

  assert.ok(join, 'exists');
  assert.ok(enter.called, 'enter was called');
  assert.ok(update.called, 'update was called');
  assert.ok(exit.called, 'exit was called');
  assert.ok(isSelection(join), 'returns a selection');
});
