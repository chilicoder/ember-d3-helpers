import { emberD3HelpersInvoke } from 'dummy/helpers/ember-d3-helpers/invoke';
import { module, test } from 'qunit';
import sinon from 'sinon';

module('Unit | Helper | ember d3 helpers/invoke');

test('invokes the callback', function(assert) {
  let callback = sinon.spy();
  emberD3HelpersInvoke([ callback, 42, 'mouse' ]);
  assert.ok(callback.called, 'calls the callback');
  assert.deepEqual(callback.args[0], [42, 'mouse'], 'called with correct argument');
});
