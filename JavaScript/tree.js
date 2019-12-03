const tree = layer =>
{
  if ( layer <= 0 ) return;
  const result = [];
  for ( let i = 1; i <= layer; i++ )
  {
    result.push( " ".repeat( layer - i ) + "*".repeat( i * 2 - 1 ) );
  }
  return result;
};

tree( 5 ).forEach( n => console.log( n ) );