require('dotenv').config();
const { Client } = require('pg');

const SQL = `
  DROP TABLE category, items;

  CREATE TABLE category (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(100),
    description TEXT
  );

  CREATE TABLE items (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(100) NOT NULL,
    quantity INTEGER,
    unitPrice NUMERIC,
    categoryId INTEGER REFERENCES category(id)
  );

  -- Insert Categories (Genres or Types of Music)
  INSERT INTO category (name, description) VALUES
  ('Rock', 'A genre characterized by a strong rhythm and electric guitars'),
  ('Pop', 'Popular music with catchy melodies and beats'),
  ('Jazz', 'Smooth and improvisational music with complex harmonies'),
  ('Classical', 'Orchestral and instrumental music from various periods'),
  ('Hip-Hop', 'A genre with rhythmic speech and beats');

  -- Insert Items (Songs, Albums, or Instruments)
  INSERT INTO items (name, quantity, unitPrice, categoryId) VALUES
  -- Rock Music
  ('Electric Guitar', 10, 799.99, 1),
  ('Rock Greatest Hits Vinyl', 20, 29.99, 1),
  ('Drum Set', 5, 999.99, 1),
  ('Concert Ticket - Rock Band', 50, 49.99, 1),

  -- Pop Music
  ('Pop Album CD', 30, 14.99, 2),
  ('Microphone', 15, 199.99, 2),
  ('Concert Ticket - Pop Artist', 40, 59.99, 2),
  ('Synthesizer', 8, 499.99, 2),

  -- Jazz Music
  ('Saxophone', 7, 899.99, 3),
  ('Jazz Classics Vinyl', 15, 24.99, 3),
  ('Trumpet', 5, 699.99, 3),
  ('Live Jazz Concert Ticket', 35, 39.99, 3),

  -- Classical Music
  ('Grand Piano', 3, 5000.00, 4),
  ('Classical Symphony CD', 25, 19.99, 4),
  ('Violin', 10, 1299.99, 4),
  ('Opera Ticket', 20, 79.99, 4),

  -- Hip-Hop Music
  ('Hip-Hop Mixtape Vinyl', 20, 34.99, 5),
  ('Turntable', 6, 299.99, 5),
  ('Concert Ticket - Hip-Hop Artist', 45, 44.99, 5),
  ('Studio Headphones', 12, 249.99, 5);
`;

async function populateDatabase() {
  const client = new Client({
    connectionString: process.env.LOCAL_DATABASE_URL,
  });
  await client.connect();
  try {
    await client.query(SQL);
    console.log('populate database done');
  } catch (error) {
    console.error('Populate data failed: ' + error);
  } finally {
    await client.end();
  }
}

populateDatabase();
