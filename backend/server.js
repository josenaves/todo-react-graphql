const express = require('express');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const bodyParser = require('body-parser');
const cors = require('cors');
const schema = require('./data/schema');

const app = express().use('*', cors());

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: schema }) );
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

const GRAPHQL_PORT = 4000;

app.listen(GRAPHQL_PORT)

console.log(`Listening on port ${GRAPHQL_PORT}...`);