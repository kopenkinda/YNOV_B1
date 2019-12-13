const expandedForm = num =>
{
  num = `${ num }`.split( '' );
  let result = '';
  for ( let i = 0; i < num.length; i++ )
  {
    if ( +num[ i ] == 0 ) continue;
    result += num[ i ] + '0'.repeat( num.length - ( i + 1 ) ) + ' + ';
  };
  return ( result.slice( -3, -1 ) == ' +' ) ? result.slice( 0, -3 ) : result;
}


console.log( expandedForm( 12 ), '10 + 2' );
console.log( expandedForm( 42 ), '40 + 2' );
console.log( expandedForm( 70304 ), '70000 + 300 + 4' );
console.log( expandedForm( 9000000 ), '9000000' );
console.log( expandedForm( 59086590 ), '50000000 + 9000000 + 80000 + 6000 + 500 + 90' );