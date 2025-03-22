const pool = require('../pool');

async function getCategories() {
  const { rows } = pool.query('SELECT * FROM category');

  return rows;
}

async function getCategoryById(id) {}

async function addCategory(category) {}

async function updateCategory(id) {}

async function deleteCategory(id) {}

module.exports = {
  getCategories,
  getCategoryById,
  addCategory,
  updateCategory,
  deleteCategory,
};
