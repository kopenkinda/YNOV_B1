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
if ( !localStorage[ 'myTodoList' ] ) localStorage.setItem( 'myTodoList', JSON.stringify( [ { name: "First TODO item", checked: false, id: 0 } ] ) );
let todos = JSON.parse( localStorage[ 'myTodoList' ] ); // []
let id = todos.length;

const addTodo = ( name ) =>
{
  if ( name === '' ) return false;
  todos.push( {
    name,
    checked: false,
    id: ++id
  } );
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
    let { name, checked } = todo;
    let todoContainer = document.createElement( 'li' );
    todoContainer.classList.add( 'todo-item' );

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
      todos = [ ...todos.slice( 0, index ), { name, checked: !checked }, ...todos.slice( index + 1 ) ];
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

render();