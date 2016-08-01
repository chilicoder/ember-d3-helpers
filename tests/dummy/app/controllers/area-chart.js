import Ember from 'ember';
import Axis from 'd3-axis';
const { Controller, computed } = Ember;

export default Controller.extend({


  text: "Why do you write like you're writing out of time",


  height: 400,


  width: 600,


  margin: {
    'top':10,
    'right':10,
    'bottom':20,
    'left':20
  },


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


  viewBox: computed( 'conatinerHeight', 'containerWidth', function() {
    const width  = this.get( 'containerWidth' );
    const height = this.get( 'containerHeight' );

    return [ 0, 0, width, height ];
  }),


  xKey( d ) {
    return d.char;
  },


  yKey( d ) {
    return d.count;
  },


  xDomain( domain ) {
    return domain.map( d => { return d.char; });
  },


  xAxis( xScale ) {
    return Axis['axisBottom']( xScale );
  },


  yAxis( yScale ) {
    return Axis['axisLeft']( yScale );
  }



});
