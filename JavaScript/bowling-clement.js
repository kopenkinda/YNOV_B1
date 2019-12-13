// @ts-check
// TP
// 10 tirs au lancer au total
// chaque lancé a 2 boules
// en cas de spare (10 quilles tombé en 2 boules), on ajoute le score de la prochaine boule à ce score
// en cas de strike (10 quilles en 1 boule), on ajoute le score des 2 prochaines boules
// le score maximum est de 300
// sur le dernier tir en cas de strike on ajoutera 2 boules au tir


let tour = [];
let spare = false;
let strike = false;
let scoreTotal = 0;

for ( let i = 0; i < 10; i++ )
{
  console.log( `Score: ${ scoreTotal }` );
  let tir1 = 9; //Math.round(Math.random()*10);
  let tir2 = 1; //Math.round(Math.random()*(10-tir1));
  tour[ i ] = [ tir1, tir2 ];
  console.log( tour[ i ] );


  if ( tour[ i ][ 0 ] === 10 )
  {
    strike = true;
  }

  else if ( tour[ i ][ 0 ] + tour[ i ][ 1 ] === 10 )
  {
    spare = true;
  }

  else
  {
    scoreTotal += tir1 + tir2;
  }

  if ( spare )
  {
    scoreTotal += 10 + tir1;
    spare = false;
    continue;
  }
  if ( strike )
  {
    scoreTotal += 10 + ( tir1 + tir2 ) * 2;
    strike = false;
    continue;
  }

}

console.log( scoreTotal );