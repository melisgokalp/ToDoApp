angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.todos = [
      {text:'Read a book', done:false}, 
      {text:'Buy groceries', done:false}];
    todoList.archived = [];
    todoList.plural = "s"
    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText, done:false});
      todoList.todoText = '';
    };
 
    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
 
    todoList.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo)
        else todoList.archived.push(todo);
      });
      if (todoList.todos.length<2) {todoList.plural=""};

    };

    todoList.retrieve = function() {
      var oldTodos = todoList.archived; 
      angular.forEach(oldTodos, function(todo) {
        todoList.todos.push(todo);
      });
      todoList.archived = [];
      if (todoList.todos.length<2) {todoList.plural=""};

    };
  });