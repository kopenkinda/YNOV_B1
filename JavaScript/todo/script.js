//@ts-check

/**
* Todo list
* ? Edit
*/

const select = q => document.querySelector( q );
const selectAll = q => document.querySelectorAll( q );

//* Elements

const [ input, list, addButton, selectedCounter, bulkDelete, clearAll ] = [ '#actionInput', '#todos', '#addItem', '#selectionCount', '#deleteItems', '#clearAll' ].map( el => select( el ) );
let deletionCounter = 0;

// localStorage.removeItem( 'myTodoList' );
if ( !localStorage[ 'myTodoList' ] )
  localStorage.setItem( 'myTodoList', JSON.stringify(
    [ { name: "First TODO item", checked: false, id: 0, priority: 2 } ]
  ) );
let todos = JSON.parse( localStorage[ 'myTodoList' ] ); // []

const addTodo = ( name ) =>
{
  if ( name === '' ) return false;
  todos.push( {
    name,
    checked: false,
    id: todos.length + 1,
    priority: select( '#priority' ).value || 0
  } );
  todos = todos;
  render();
  return true;
}



const render = () =>
{
  deletionCounter = 0;
  list.innerHTML = '';

  // render list
  todos.sort( ( a, b ) => a.priority - b.priority ).sort( ( a, b ) => b.checked - a.checked ).forEach( ( todo, index ) =>
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
    todos = ( todo.checked ) ? todos.filter( t => t.id != todo.id ) : todos )
  render();
}

clearAll.onclick = () =>
{
  if ( window.confirm( 'Are you sure you want to delete all elements?' ) )
  {
    todos = [];
    render();
  }
}

selectAll( '.custom-select__item' )
  .forEach( span =>
    span.onclick = () =>
    {
      select( '#priority' ).value = span.getAttribute( 'data-value' );
      select( '#custom-select__selected' ).innerText = select( '#priority > option:checked' ).innerText
    } );

select( '.custom-select' ).onclick = () =>
  select( '.custom-select' ).classList.toggle( 'shown' )



const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const date = new Date();

select( '.appHeader > h1' ).innerText = `${ date.getDate() } ${ months[ date.getMonth() ] } ${ date.getFullYear() }`;

render();