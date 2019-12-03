function estMajeur( n )
{
  return n >= 18;
}

console.log( estMajeur( 19 ) ); // true
console.log( estMajeur( 18 ) ); // true
console.log( estMajeur( 16 ) ); // false

function factorielle( n )
{
  let result = 1;
  for ( let i = 1; i <= n; i++ )
  {
    result *= i;
  }
  return result;
}

console.log( factorielle( 8 ) ) // 40320

const nombrePremierAvant = n =>
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

nombrePremierAvant( 10 );

var sommeArray = [ 4584, 156842, 2035, 20.355, 4587.26 ];

console.log( sommeArray.reduce( ( acc, val ) => acc + val ) );

//filter ce tableau sur les chiffres divisibles par 13
var divisibleParTreize = [ 13, 26, 5928, 4582, 4758, 9874, 2548, 611 ];
console.log( divisibleParTreize.filter( n => !( n % 13 ) ) );
//Reprendre le code des nombres premiers et sortez la liste des nombres premier dans un tableau