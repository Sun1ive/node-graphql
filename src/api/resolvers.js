import todos from './todos';

export default {
  todo: ({ id }) => todos.filter(todo => todo.id === id),
  todos: () => todos,
  completedTodos : () => todos.filter(todo => todo.completed),
  uncompletedTodos : () => todos.filter(todo => !todo.completed),
}