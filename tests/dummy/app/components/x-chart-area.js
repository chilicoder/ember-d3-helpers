import Ember from 'ember';
import { select } from 'd3-selection';


export default Ember.Component.extend({

  tagName: 'svg',


  d3el: null,


  data: null,


  attributeBindings: [ 'width', 'height' ],


  width: null,


  height: null,


  xAccessor( d ) {
    return d;
  },


  yAccessor( d ) {
    return d.count;
  },


  idAccessor( d, i ) {
    debugger;
    return d ? d : this.id;
  },


  didInsertElement() {
    this._super( ...arguments );
    Ember.run.scheduleOnce( 'afterRender', this, 'renderChart' )
  },


  renderChart() {
    let [ el ] = this.$().toArray();
    this.set('d3el', select(el));
  },

});
