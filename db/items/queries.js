const pool = require('../pool');

async function getItems() {
  const { rows } = await pool.query('SELECT * FROM items');
  return rows;
}

async function addItem({ name, quantity, unitPrice, categoryId }) {
  await pool.query(
    `
    INSERT INTO items (name, quantity, unitPrice, categoryId)
    VALUES ($1, $2, $3, $4)
    `,
    [name, quantity, unitPrice, categoryId]
  );
}

async function updateItem(id, { name, quantity, unitPrice, categoryId }) {
  await pool.query(
    `
    UPDATE items
    SET(name, quantity, unitPrice, categoryId) = ($2, $3, $4, $5)
    WHERE id = $1
    `,
    [id, name, quantity, unitPrice, categoryId]
  );
}

module.exports = { getItems, addItem, updateItem };
