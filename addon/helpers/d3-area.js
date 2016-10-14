import Ember from 'ember';
import { area } from 'd3-shape';

export function d3Area( [ xScale, yScale ], { xAccessor, yAccessor } ) {
  let yMin = yScale.domain()[0];
  let xFn  = (d) => xScale( xAccessor( d ) );
  let y1Fn = (d) => yScale( yAccessor( d ) );
  let y0Fn = ()  => yScale( yMin );

  return area().x( xFn ).y1( y1Fn ).y0( y0Fn );
}

export default Ember.Helper.helper(d3Area);
