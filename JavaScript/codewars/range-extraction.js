const solution = list =>
{
  let result = `${ list[ 0 ] }`;
  for ( let i = list[ 0 ], index = 0; i < list[ list.length - 1 ]; i++ )
  {
    if ( list[ index + 1 ] == i + 1 ) { result += ','; continue; };
    console.log( list[ index + 1 ], i )
    index++;
    result += `${ i }`;
  }
  return result;
}

console.log( solution( [ -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20 ] ), "-6,-3-1,3-5,7-11,14,15,17-20" )