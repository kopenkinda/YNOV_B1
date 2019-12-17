console.log( 'hello world from the script' );


console.log( document.getElementsByTagName( 'h1' ) );
console.log( document.getElementsByClassName( 'col' ) );
console.log( document.getElementById( 'title' ) );

let h1 = document.getElementById( 'title' );
console.log( h1.innerHTML );
h1.innerHTML = "Title" || prompt( 'update the title' );


let cols = document.getElementsByClassName( 'col' );
let spans = document.getElementsByTagName( 'span' );
let query = document.querySelector( 'h1#title' );
let alert = document.querySelector( '.col .alert' );
let col = document.querySelector( '.col' );
let btnIcon = document.querySelector( '.col .btn .fas' );
let nextCol = col.nextSibling;
let btn = document.createElement( 'button' );


cols[ 1 ].innerHTML = '<span>here is a span</span>';


console.log( spans );

console.log( query );
console.log( query.getAttribute( 'id' ) );
query.setAttribute( 'id', 'toto' );
console.log( query.getAttribute( 'id' ) );

cols[ 1 ].innerHTML = '<div class="alert"> Here is a alert snap</div>';

console.log( alert.className );
alert.className = 'alert alert-success';
console.log( alert.classList );

col.innerHTML = '<button class="btn btn-outline-dark"><i class="fas fa-play"></i></button>';
btnIcon.classList.toggle( 'fa-play' );
btnIcon.classList.toggle( 'fa-pause' );

col.innerHTML = '<button class="btn btn-outline-dark"><i class="fas fa-play"></i></button>';
console.log( col.parentNode );
console.log( col.childNodes );

console.log( nextCol );

nextCol.nextSibling.innerHTML = '<button class="btn btn-outline-dark"><i class="fas fa-play"></i></button>';
btn.innerHTML = 'new btn';
nextCol.nextSibling.appendChild( btn );


// TP

const col2 = document.querySelector( '.col:nth-child(2)' );
col2.innerHTML += `<div id="divTP2">
<p>Langages basés sur ECMAScript :</p>

<ul>
    <li>JavaScript</li>
    <li>JScript</li>
    <li>ActionScript</li>
    <li>EX4</li>
</ul>
</div>`;

/*
Ajouter à col 2 ce HTML en JS

<div id="divTP2">
    <p>Langages basés sur ECMAScript :</p>

    <ul>
        <li>JavaScript</li>
        <li>JScript</li>
        <li>ActionScript</li>
        <li>EX4</li>
    </ul>
</div>
 */
