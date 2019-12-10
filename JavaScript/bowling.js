//? TP
//? 10 tirs au lancer au total
//? chaque lancé a 2 boules
//? en cas de spare (10 quilles tombé en 2 boules), on ajoute
//? le score de la prochaine boule à ce score
//? en cas de strike (10 quilles en 1 boule),
//? on ajoute le score des 2 prochaines boules
//? le score maximum est de 300
//? sur le dernier tir en cas de strike on ajoutera 2 boules au tir

const bowling = {
  p1: { throws: [], score: 0 },
  // p2: { throws: [], score: 0 },
};

const generateThrows = ( playerAll, throwsCount ) =>
{
  playerAll.forEach( player =>
  {
    for ( let i = 0; i < throwsCount; i++ )
    {
      const firstThrow = Math.round( Math.random() * 10 );
      player.throws.push( [ firstThrow, Math.round( Math.random() * ( 10 - firstThrow ) ) ] );
    }
  } );
};

const countScore = playerAll =>
{
  playerAll.forEach( ( player, index ) =>
  {
    {
      console.log( `\nPlayer${ index + 1 }'s throws:\n` );
      for ( let i = 0; i < player.throws.length; i++ )
      {
        let throw1 = player.throws[ i ][ 0 ];
        let throw2 = player.throws[ i ][ 1 ];

        // * Strike
        if ( throw1 == 10 )
        {
          console.log( `Player${ index + 1 }: ${ throw1 } - ${ throw2 } Strike` );
          try
          {
            player.score += throw1 + throw2 + player.throws[ i + 1 ][ 0 ] + player.throws[ i + 1 ][ 1 ];
          } catch ( e )
          {
            let throw3 = Math.round( Math.random() * 10 );
            player.score += throw1 + throw2 + throw3 + Math.round( Math.random() * ( 10 - throw3 ) );
          }
        }
        // * Spare
        else if ( ( throw1 + throw2 ) == 10 || throw2 == 10 )
        {
          console.log( `Player${ index + 1 }: ${ throw1 } - ${ throw2 } Spare` );
          try
          {
            player.score += throw1 + throw2 + player.throws[ i + 1 ][ 0 ];
          } catch ( e )
          {
            let throw3 = Math.round( Math.random() * 10 );
            player.score += throw1 + throw2 + throw3;
          }
        }
        // * Normal throw
        else
        {
          console.log( `Player${ index + 1 }: ${ throw1 } - ${ throw2 }` )
          player.score += throw1 + throw2;
        }
        console.log( `${ i } Current score: ${ player.score }pts.\n` )
      }
    };
  } );
};

generateThrows( [ bowling.p1 ], 10 );
countScore( [ bowling.p1 ] );
console.log( bowling.p1.score );
// generateThrows( [ bowling.p1, bowling.p2], 10 );
// countScore( [ bowling.p1, bowling.p2 ] );
// console.log( bowling.p1.score );
// console.log( bowling.p2.score );
