import { buildSchema } from 'graphql';

export default buildSchema(
  `
  type Step {}
  type Query {
    todo(id: ID!): Todo!
    todos: [Todo]!
    completedTodos: [Todo]!
    uncompletedTodos: [Todo]!
  }
  type Todo {}

  type Mutation {
    createTodo(input: Todo!): Todo
    updateTodo(id: ID!, input: Todo!): 
    deleteTodo(id: ID!): ID
  }
  `,
);
