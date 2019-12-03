const prime = n =>
{
  if ( n < 2 ) return [];
  const result = [];
  outerLoop:
  for ( let i = 2; i <= n; i++ )
  {
    for ( let x = 2; x < i; x++ )
    {
      if ( !( i % x ) ) continue outerLoop;
    }
    result.push( i );
  }
  return result;
};

console.log( prime( 100 ) );