// const toCamelCase = str => str.split( '_' ).join( '-' ).split( '-' ).map( s => { console.log( s ); return s.charAt( 0 ).toUpperCase() + s.slice( 1 ) } ).join( '' );
const toCamelCase = str => str.split( '_' ).join( '-' ).split( '-' ).map( ( word, index ) => { if ( index == 0 && word.toLowerCase() == word ) { return word.toLowerCase() } return word.charAt( 0 ).toUpperCase() + word.slice( 1 ).toLowerCase(); } ).join( '' );
console.log( toCamelCase( '' ), '' )
console.log( toCamelCase( "the_stealth_warrior" ), "theStealthWarrior" )
console.log( toCamelCase( "The-Stealth-Warrior" ), "TheStealthWarrior" )
console.log( toCamelCase( "A-B-C" ), "ABC" )
