const express = require('express');
const postgraphql = require('postgraphql').postgraphql;
const expressGraphQL = require('express-graphql');
const cors = require('cors');

const app = express().use('*', cors());

// app.use(postgraphql('postgres://localhost:5432'))
app.use(postgraphql(
  'postgres://postgres:123456@localhost:5432/flexhire',
  'public',
  { graphiql: true }
))

app.listen(4000)
console.log("Listening...");