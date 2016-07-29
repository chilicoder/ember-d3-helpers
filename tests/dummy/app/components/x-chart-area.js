import Ember from 'ember';
import { select } from 'd3-selection';
const { Component, computed, run } = Ember;


export default Component.extend({

  tagName: 'svg',


  d3el: null,


  data: null,


  attributeBindings: [ 'containerWidth', 'containerHeight', 'viewBox' ],


  width: null,


  height: null,


  viewBox: computed( 'conatinerHeight', 'containerWidth', function() {
    const width  = this.get( 'containerWidth' );
    const height = this.get( 'containerHeight' );

    return [ 0, 0, width, height ];
  }),


  containerWidth: computed( 'width', 'margin.right', 'margin.left', function() {
    const width = this.get( 'width' );
    const left  = this.get( 'margin.left' );
    const right = this.get( 'margin.right' );

    return width + left + right;
  }),


  containerHeight: computed( 'height', 'margin.top', 'margin.bottom', function() {
    const height = this.get( 'height' );
    const top    = this.get( 'margin.top' );
    const bottom = this.get( 'margin.bottom' );

    return height + top + bottom;
  }),


  margin: {
    'top':10,
    'right':10,
    'bottom':10,
    'left':30
  },


  xAccessor( d ) {
    return d;
  },


  yAccessor( d ) {
    return d.count;
  },


  didInsertElement() {
    this._super( ...arguments );
    run.scheduleOnce( 'afterRender', this, 'renderChart' )
  },


  renderChart() {
    let [ el ] = this.$().toArray();
    this.set('d3el', select(el));
  },

});
