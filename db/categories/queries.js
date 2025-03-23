const pool = require('../pool');

async function getCategories() {
  const { rows } = await pool.query('SELECT * FROM category ORDER BY id');

  return rows;
}

async function getCategoryById(id) {
  const result = await pool.query('SELECT * FROM category WHERE id = $1', [id]);

  return result.rows[0];
}

async function addCategory({ name, description }) {
  await pool.query(
    `
    INSERT INTO category (name, description) 
    VALUES ($1, $2)
    `,
    [name, description]
  );
}

async function updateCategory(id, { name, description }) {
  await pool.query(
    `
    UPDATE category
    SET (name, description) = ($2, $3)
    WHERE id = $1
    `,
    [id, name, description]
  );
}

async function deleteCategory(id) {
  await pool.query(
    `
    DELETE FROM category
    WHERE id = $1
    `,
    [id]
  );
}

async function getCategoryItemCount(id) {
  const result = await pool.query(
    `
    SELECT COUNT(*) FROM items
    WHERE categoryId = $1
    `,
    [id]
  );
  return result.rows[0].count;
}

module.exports = {
  getCategories,
  getCategoryById,
  addCategory,
  updateCategory,
  deleteCategory,
  getCategoryItemCount,
};
