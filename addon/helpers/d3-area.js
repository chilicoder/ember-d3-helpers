import Ember from 'ember';
import { area } from 'd3-shape';

export function d3Area( [ xScale, yScale ], { xKey, yKey } ) {
  let xFn  = (d) => xScale( xKey( d ) );
  let y1Fn = (d) => yScale( yKey( d ) );
  let y0Fn = ()  => yScale( 0 );

  return area().x( xFn ).y1( y1Fn ).y0( y0Fn );
}

export default Ember.Helper.helper(d3Area);
