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
        .where({id: id})
        .select(fields);
      return rows[0];
    }
  },
  Mutation: {
  }
};

module.exports = resolvers;
