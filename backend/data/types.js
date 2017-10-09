const typeDefs = `
  type Todo {
    id: ID!
    description: String
    dueDate: String
    priority: Int
    completed: Boolean
  }

  # the schema allows the following query:
  type Query {
    todos: [Todo]
    todo(id: ID!): Todo
  }

  # Mutations:
  type Mutation {
    addTodo(
      description: String!
      dueDate: String!
      priority: Int!
      completed: Boolean!
    ): Todo
    removeTodo(id: ID!): ID
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

module.exports = typeDefs;
