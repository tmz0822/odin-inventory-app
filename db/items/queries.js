const pool = require('../pool');

async function getItems() {
  const { rows } = await pool.query(
    `
    SELECT 
      items.id, 
      items.name,
      items.quantity, 
      items.unitPrice AS unit_price, 
      category.name AS category_name 
    FROM items
    JOIN category
    ON category.id = items.categoryId
    `
  );
  return rows;
}

async function getItemById(id) {
  const result = await pool.query(
    `
    SELECT * FROM items
    WHERE id = $1
    `,
    [id]
  );

  return result.rows[0];
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

async function deleteItem(id) {
  await pool.query(
    `
    DELETE FROM items
    WHERE id = $1
    `,
    [id]
  );
}

module.exports = { getItems, getItemById, addItem, updateItem, deleteItem };
