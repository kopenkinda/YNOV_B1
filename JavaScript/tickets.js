function tickets( peopleInLine )
{
  const bills = [ 0, 0, 0 ]; // 25 50 100
  for ( let bill of peopleInLine ) 
  {
    if ( bill == 25 )
    {
      bills[ 0 ]++;
    }

    else if ( bill == 50 )
    {
      if ( bills[ 0 ] > 0 )
      {
        bills[ 0 ]--;
        bills[ 1 ]++;
      }
      else
        return "NO";
    }

    else if ( bill == 100 )
    {
      if ( bills[ 0 ] >= 1 && bills[ 1 ] >= 1 )
      {
        bills[ 0 ]--;
        bills[ 1 ]--;
        bills[ 2 ]++;
      } else if ( bills[ 0 ] >= 3 )
      {
        bills[ 0 ] -= 3;
        bills[ 2 ]++;
      } else
      {
        return "NO"
      }
    }
  }
  return "YES"
}

console.log( tickets( [ 25, 25, 50, 50 ] ), "YES" );
console.log( tickets( [ 25, 100 ] ), "NO" );
console.log( tickets( [ 25, 25, 50, 50, 100 ] ), "NO" );
