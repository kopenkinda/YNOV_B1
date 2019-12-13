const countDeafRats = town =>
{
  town = town.trim().replace( / /g, '' ).split( 'P' );
  let sides = {
    left: [],
    right: []
  };
  town[ 0 ] = town[ 0 ].split( '' );
  town[ 1 ] = town[ 1 ].split( '' );
  for ( let i = 0; i < town[ 0 ].length; i += 2 ) { sides.left.push( `${ town[ 0 ][ i ] }${ town[ 0 ][ i + 1 ] }` ) };
  for ( let i = 0; i < town[ 1 ].length; i += 2 ) { sides.right.push( `${ town[ 1 ][ i ] }${ town[ 1 ][ i + 1 ] }` ) };
  let counter = 0;
  for ( let left of sides.left )
  {
    if ( left != '~O' ) counter++;
  }
  for ( let right of sides.right )
  {
    if ( right != 'O~' ) counter++;
  }
  return counter;
}


console.log( countDeafRats( "~O~O~O~O P" ), 0 );
console.log( countDeafRats( "P O~ O~ ~O O~" ), 1 );
console.log( countDeafRats( "~O~O~O~OP~O~OO~" ), 2 );