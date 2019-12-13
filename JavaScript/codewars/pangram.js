const isPangram = s => ( ( 'abcdefghijklmnopqrstuvwxyz'.split( '' ).filter( l => s.toLowerCase().indexOf( l ) == -1 ) ).length > 0 ) ? false : true;

console.log( isPangram( 'The quick brown fox jumps over the lazy dog.' ) );
console.log( isPangram( 'Pack my box with five dozen liquor jugs.' ) );
console.log( isPangram( 'funnyPoopy' ) );