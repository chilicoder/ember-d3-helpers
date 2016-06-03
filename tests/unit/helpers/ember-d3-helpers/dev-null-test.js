import { emberD3HelpersDevNull } from 'dummy/helpers/ember-d3-helpers/dev-null';
import { module, test } from 'qunit';

module('Unit | Helper | ember d3 helpers/dev null');

test('it works', function(assert) {
  assert.equal(typeof emberD3HelpersDevNull, 'function', 'returns a function');
  assert.notOk(emberD3HelpersDevNull(), 'does not return anything');
});
