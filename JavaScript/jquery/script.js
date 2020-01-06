$( document ).ready( function ()
{
  $( 'p' ).each( function ()
  {
    $( this ).html( 'Hello World !' );
  } );
  let $col2 = $( '#col2' );
  $col2.toggleClass( 'toto' );
  let myDiv = $col2.children( '#myDiv' );
  $col2.append( '<div id="myDiv2"></div>' );
  let myDiv2 = $( '#myDiv2' );
  myDiv2.text( "here is my text" );
  myDiv2.html( 'modified content' );
  $col2.prepend( '<div id="myDiv3">im prepend</div>' );
  $col2.after( '<div id="myDiv4">after div</div>' );
  $col2.before( '<div id="myDiv5">before div</div>' );
  $( '#myDiv5' ).remove();
  let $myDiv4 = $( '#myDiv4' );
  $myDiv4.attr( 'foo', 'bar' );
  $myDiv4.removeAttr( 'foo' );
  $myDiv4.css( 'color', 'red' );
  $( '#testJS' ).click( function ()
  {
    $( this ).children( 'i' ).toggleClass( 'fa-play' );
    $( this ).children( 'i' ).toggleClass( 'fa-pause' );
  } );
} );



/** TP
* ajouter un bouton "Afficher la suite du formulaire"
* au click du bouton faire apparaître un input pour rentrer l'âge
* afficher un message d'erreur si l'age nest pas un chiffre
* si l'age n'est pas un chiffre ajouter la class 'is-invalid' à l'input
* enlever la class 'is-invalid' si l'age est à nouveau un number
* faire un bouton envoyer lors du click sur envoyer controler que
* tout les champs ont bien été remplis correctement
* faire un span alert
* ( https://getbootstrap.com/docs/4.0/components/alerts/)
* si aucune erreur le mettre en success et afficher message bien 
* envoyé si il y a une erreur le mettre en rouge et dire quel champs à
* une erreur
*/

$( '#show-after' ).on( 'click', ( e ) =>
{
  e.preventDefault();
  $( '#age' ).parent().toggleClass( 'd-none' );
  $( '#show-after i' ).toggleClass( 'fa-arrow-down' );
  $( '#show-after i' ).toggleClass( 'fa-arrow-up' );
} );

$( '#age' ).on( 'input', () =>
{
  if ( Number.isInteger( +$( '#age' ).val() ) ) $( '#age' ).removeClass( 'is-invalid' )
  else $( '#age' ).addClass( 'is-invalid' );
} )

$( '#send-form' ).on( 'click', ( e ) =>
{
  e.preventDefault();
} );