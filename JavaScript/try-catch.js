try
{
  console.log( 5 / 0 );
  throw "ZeroDivisionError";
} catch ( e )
{
  console.log( e );
};