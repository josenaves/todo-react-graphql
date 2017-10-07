#!/usr/bin/env node
const pg = require("pg");

const conString = "pg://postgres:123456@localhost:5432/flexhire";

const client = new pg.Client(conString);
client.connect();

let query = client.query("SELECT * FROM todos", (err, result) => {
  if (!err) {
    let firstRow = result.rows[0];
    for (let columnName in firstRow) {
      console.log('column "%s" has a value of "%j"', columnName, firstRow[columnName]);
    }
  } else {
    console.error(err);
  }
  
  client.end();
  
  return 0;
});


