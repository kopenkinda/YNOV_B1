//@ts-check
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
  p1: { throws: [], score: 0, name: "Johny" },
  p2: { throws: [], score: 0, name: "Joe Mama" },
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
          console.log( `${ player.name }'s turn: ${ throw1 } - ${ throw2 } -> Strike` );
          try
          {
            if ( player.throws[ i + 1 ][ 0 ] == 10 )
            {
              player.score += throw1 + 10 + player.throws[ i + 2 ][ 0 ] + player.throws[ i + 2 ][ 1 ];
            } else
            {
              player.score += throw1 + player.throws[ i + 1 ][ 0 ] + player.throws[ i + 1 ][ 1 ];
            }
          } catch ( e )
          {
            let throw3 = Math.round( Math.random() * 10 );
            // throw3 = 10; // !All Strikes
            if ( throw3 == 10 )
            {
              let throw4 = Math.round( Math.random() * 10 );
              // throw4 = 10; // !All Strikes
              player.score += 10 + throw3 + throw4 + Math.round( Math.random() * ( 10 - throw4 ) );
            } else
            {
              player.score += 10 + throw3 + Math.round( Math.random() * ( 10 - throw3 ) );
            }
          }
        }
        // * Spare
        else if ( ( throw1 + throw2 ) == 10 )
        {
          console.log( `${ player.name }'s turn: ${ throw1 } - ${ throw2 } -> Spare` );
          try
          {
            player.score += 10 + player.throws[ i + 1 ][ 0 ];
          } catch ( e )
          {
            let throw3 = Math.round( Math.random() * 10 );
            player.score += throw1 + throw2 + throw3;
          }
        }
        // * Normal throw
        else
        {
          console.log( `${ player.name }'s turn: ${ throw1 } - ${ throw2 }` )
          player.score += throw1 + throw2;
        }
        console.log( `Current score: ${ player.score }pts.\n` )
      }
    }
  } );
};

const getLeaderboard = players =>
{
  const sortedPlayers = players.sort( ( playerX, playerY ) => playerX.score < playerY.score );
  console.log( '====== LEADERBOARD ======\n\n' );
  sortedPlayers.forEach( ( player, index ) => console.log( `${ index + 1 }) ${ player.name } -> ${ player.score } points.` ) )
}

const players = [ bowling.p1 ];//, bowling.p2 ];
generateThrows( players, 10 );
bowling.p1.throws = [ [ 5, 0 ], [ 6, 4 ], [ 10, 0 ], [ 5, 4 ] ];
countScore( players );
getLeaderboard( players );
