require('dotenv').config();
const { Client } = require('pg');

const SQL = `
  CREATE TABLE category (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(100),
    description TEXT
  );

  CREATE TABLE inventory (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(100) NOT NULL,
    quantity INTEGER,
    unitPrice NUMERIC,
    categoryId INTEGER REFERENCES category(id)
  );
`;

async function populateDatabase() {
  const client = new Client({
    connectionString: process.env.LOCAL_DATABASE_URL,
  });
  await client.connect();
  try {
    await client.query(SQL);
  } catch (error) {
    console.error('Populate data failed: ' + error);
  } finally {
    await client.end();
  }

  console.log('populate database done');
}

populateDatabase();
