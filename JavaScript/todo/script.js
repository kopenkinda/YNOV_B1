//@ts-check

/**
* Todo list
* ? Add / Remove / Bulk Delete
*/

const select = q => document.querySelector( q );
const selectAll = q => document.querySelectorAll( q );

//* Elements

const [ input, list, addButton, selectedCounter, bulkDelete ] = [ '#actionInput', '#todos', '#addItem', '#selectionCount', '#deleteItems' ].map( el => select( el ) );
let deletionCounter = 0;

// localStorage.removeItem( 'myTodoList' );
if ( !localStorage[ 'myTodoList' ] ) localStorage.setItem( 'myTodoList', JSON.stringify( [ { name: "First TODO item", checked: false, id: 0, priority: 2 } ] ) );
let todos = JSON.parse( localStorage[ 'myTodoList' ] ); // []
let id = todos.length;

const addTodo = ( name ) =>
{
  if ( name === '' ) return false;
  todos.push( {
    name,
    checked: false,
    id: ++id,
    priority: select( '#priority' ).value || 0
  } );
  todos = todos.sort( ( a, b ) => a.priority - b.priority );
  render();
  return true;
}

/** 
* <li class="todo-item done">
*    <span class="custom-checkbox">
*      <i class="fas fa-check-square"></i>
*      <!-- <i class="fas fa-square"></i> -->
*    </span>
*    <span class="todo-item__name">
*      TO Do item here
*    </span>
*  </li>
*/

const render = () =>
{
  deletionCounter = 0;
  list.innerHTML = '';

  // render list
  todos.forEach( ( todo, index ) =>
  {
    todo.id = index;
    let { name, checked, id, priority } = todo;
    let todoContainer = document.createElement( 'li' );
    todoContainer.classList.add( 'todo-item' );
    if ( todo.priority == 0 )
      todoContainer.classList.add( 'border-red' );
    else if ( todo.priority == 1 )
      todoContainer.classList.add( 'border-orange' );
    else if ( todo.priority == 2 )
      todoContainer.classList.add( 'border-green' );

    let customCheckbox = document.createElement( 'span' );
    customCheckbox.classList.add( 'custom-checkbox' );

    let todoItemName = document.createElement( 'span' );
    todoItemName.classList.add( 'todo-item__name' );
    todoItemName.innerText = name;

    if ( checked )
    {
      deletionCounter++;
      customCheckbox.innerHTML = '<i class="fas fa-check-square"></i>';
      todoContainer.classList.add( 'done' );
    }
    else
    {
      customCheckbox.innerHTML = '<i class="fas fa-square"></i>';
    };

    customCheckbox.onclick = () =>
    {
      todos = [ ...todos.slice( 0, index ), { name, checked: !checked, id, priority }, ...todos.slice( index + 1 ) ];
      render();
    };

    todoContainer.appendChild( customCheckbox );
    todoContainer.appendChild( todoItemName );
    list.appendChild( todoContainer );
  } )

  //deletion counter
  if ( deletionCounter == 0 ) selectedCounter.classList.add( 'hidden' )
  else selectedCounter.classList.remove( 'hidden' );
  selectedCounter.innerText = deletionCounter;

  // save state
  localStorage.setItem( 'myTodoList', JSON.stringify( todos ) );
}


// add todo by pressing enter
document.addEventListener( 'keyup', e =>
{
  if ( e.keyCode == 13 )
    if ( addTodo( input.value ) )
      input.value = '';
} )

addButton.onclick = () =>
{
  if ( addTodo( input.value ) )
    input.value = '';
};

bulkDelete.onclick = () =>
{
  JSON.parse( JSON.stringify( todos ) ).forEach( todo =>
  {
    if ( todo.checked ) todos = todos.filter( t => t.id != todo.id );
  } )
  render();
}

selectAll( '.custom-select__item' )
  .forEach( span =>
    span.onclick = () =>
    {
      select( '#priority' ).value = span.getAttribute( 'data-value' );
      select( '#custom-select__selected' ).innerText = select( '#priority > option:checked' ).innerText
    } );

select( '.custom-select' ).onclick = () =>
{
  select( '.custom-select' ).classList.toggle( 'shown' )
}


const gradients = [
  [ "#091E3A", "#2F80ED", "#2D9EE0" ],
  [ "#9400D3", "#4B0082" ],
  [ "#c84e89", "#F15F79" ],
  [ "#00F5A0", "#00D9F5" ],
  [ "#F7941E", "#72C6EF", "#00A651" ],
  [ "#F7941E", "#004E8F" ],
  [ "#72C6EF", "#004E8F" ],
  [ "#FD8112", "#0085CA" ],
  [ "#bf5ae0", "#a811da" ],
  [ "#00416A", "#E4E5E6" ],
  [ "#fbed96", "#abecd6" ],
  [ "#FFE000", "#799F0C" ],
  [ "#F7F8F8", "#ACBB78" ],
  [ "#00416A", "#799F0C", "#FFE000" ],
  [ "#334d50", "#cbcaa5" ],
  [ "#0052D4", "#4364F7", "#6FB1FC" ],
  [ "#5433FF", "#20BDFF", "#A5FECB" ],
  [ "#799F0C", "#ACBB78" ],
  [ "#ffe259", "#ffa751" ],
  [ "#00416A", "#E4E5E6" ],
  [ "#FFE000", "#799F0C" ],
  [ "#acb6e5", "#86fde8" ],
  [ "#536976", "#292E49" ],
  [ "#BBD2C5", "#536976", "#292E49" ],
  [ "#B79891", "#94716B" ],
  [ "#9796f0", "#fbc7d4" ],
  [ "#BBD2C5", "#536976" ],
  [ "#076585", "#fff" ],
  [ "#00467F", "#A5CC82" ],
  [ "#000C40", "#607D8B" ],
  [ "#1488CC", "#2B32B2" ],
  [ "#ec008c", "#fc6767" ],
  [ "#cc2b5e", "#753a88" ],
  [ "#2193b0", "#6dd5ed" ],
  [ "#e65c00", "#F9D423" ],
  [ "#2b5876", "#4e4376" ],
  [ "#314755", "#26a0da" ],
  [ "#77A1D3", "#79CBCA", "#E684AE" ],
  [ "#ff6e7f", "#bfe9ff" ],
  [ "#e52d27", "#b31217" ],
  [ "#603813", "#b29f94" ],
  [ "#16A085", "#F4D03F" ],
  [ "#D31027", "#EA384D" ],
  [ "#EDE574", "#E1F5C4" ],
  [ "#02AAB0", "#00CDAC" ],
  [ "#DA22FF", "#9733EE" ],
  [ "#348F50", "#56B4D3" ],
  [ "#3CA55C", "#B5AC49" ],
  [ "#CC95C0", "#DBD4B4", "#7AA1D2" ],
  [ "#003973", "#E5E5BE" ]
];

document.body.style.backgroundImage = `linear-gradient(to left, ${ gradients[ Math.round( Math.random() * ( gradients.length - 1 ) ) ].reduce( ( acc, cur ) => acc + ', ' + cur, '' ).slice( 2 ) })`

render();