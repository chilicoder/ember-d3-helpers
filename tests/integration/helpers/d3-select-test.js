import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('d3-select', 'Integration | Helper | d3-select', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`
  {{#d3-graph (pipe 
    (d3-select "#my-link")
    (d3-attr "name" "fred")
  )}}
    <a id="my-link"></a>  
  {{/d3-graph}}
  `);

  this.set('ready', true);

  assert.equal(this.$('#my-link').attr('name'), 'fred');
});
