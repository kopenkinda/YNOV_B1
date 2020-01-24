class Todo {
  constructor( localStorage ) {
    this._localStorage = localStorage || "";
    this.todos = [];
  }

  addTodo( p ) {
    this.todos.push( p );
  }

  listTodos() {
    console.log( this.todos );
  }
}

const todos = [ 'todo1', 'todo2' ].map( t => new Todo( t ) );
todos.forEach( t => t.addTodo( Math.random() ) );
todos.forEach( t => t.addTodo( Math.random() ) );
todos.forEach( t => t.addTodo( Math.random() ) );
todos.forEach( t => t.listTodos() );
