const knex = require('./connector');

const fields = [
  'id', 'description', 'due_date as dueDate', 'priority', 'completed'
];

const resolvers = {
  Query: {
    async todos() {
      return await knex('todos')
        .select(fields);
    },
    async todo(root, { id }) {
      const rows = await knex('todos')
        .where({id})
        .select(fields);
      return rows[0];
    }
  },
  Mutation: {
    async addTodo(root, { description, dueDate, priority, completed }) {
      const r = await knex('todos')
        .returning(fields)
        .insert({ description, due_date: dueDate, priority, completed });
      return r[0];
    },
    async removeTodo(root, { id }) {
      const rows = await knex('todos')
        .where({id: id})
        .del();
      return rows[0];
    },
    async editTodo(root, {id,  description, dueDate, priority, completed }) {
      const r = await knex('todos')
        .where({id})
        .update({ description, due_date: dueDate, priority, completed })
        .returning(fields);
      return r[0];
    }
  }
};

module.exports = resolvers;
