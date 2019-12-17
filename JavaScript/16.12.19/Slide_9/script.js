console.log( 'test' );
let btn = document.querySelector( '#testJS' );
btn.onclick = function ()
{
  const btnIcon = this.childNodes[ 0 ];
  btnIcon.classList.toggle( 'fa-play' );
  btnIcon.classList.toggle( 'fa-pause' );
};


let btn2 = document.getElementById( 'testJS2' );
btn2.addEventListener( 'click', function ( event )
{
  console.log( event );
  console.log( this.childNodes );
  const btnIcon = this.childNodes[ 0 ];
  btnIcon.classList.toggle( 'fa-play' );
  btnIcon.classList.toggle( 'fa-pause' );

} );

btn2.addEventListener( 'click', () =>
{
  console.log( 'im the second event' );
} );


let div = document.getElementById( 'col2' );
div.addEventListener( 'click', () =>
{
  console.log( 'div event' );
} );


let toto = function () { }; // function normal
toto.bind( this ); // === () => {}


// !TP
// ? ajouter un bouton au formulaire
// ? lors du clic sur le bouton vous devez
// ? afficher dans une pop - up alert
// ? le nom en majuscule et le prénom avec
// ? la première lettre en majuscule
// ? ajouter un input pour rentrer l'age
// ? et afficher un message d'erreur si
// ? l'age nest pas un chiffre
// ? si l'age n'est pas un chiffre ajouter
// ? la class 'is-invalid' à l'input
// ? enlever la class 'is-invalid' si
// ? l'age est à nouveau un number


const sendBtn = document.getElementById( 'sendBtn' );
const firstName = document.querySelector( '#firstname' );
const lastName = document.querySelector( '#lastname' );
const age = document.querySelector( '#age' );
sendBtn.onclick = e =>
{
  e.preventDefault();
  window.alert(
    lastName.value.toUpperCase() + ' ' +
    firstName.value.charAt( 0 ).toUpperCase() + firstName.value.slice( 1 ).toLowerCase()
  )
};

age.oninput = function ( e )
{
  if ( !Number.isInteger( +this.value ) ) this.classList.add( 'is-invalid' )
  else this.classList.remove( 'is-invalid' );
}