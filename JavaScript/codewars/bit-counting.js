const countBits = ( n ) => ( n.toString( 2 ).match( /1/g ) || [] ).length

console.log( countBits( 0 ) );