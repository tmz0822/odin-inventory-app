const db = require('../db/categories/queries');

async function getCategories(req, res) {
  // get from database
  const categories = await db.getCategories();

  res.render('categories/index', { categories });
}

async function getCategoryById(req, res) {
  const { id } = req.params;
  const category = await db.getCategoryById(id);

  res.render(`categories/details`, category);
}

function addCategoryGet(req, res) {
  //navigate to add category page
  console.log('run');
  res.render('categories/add');
}

async function addCategoryPost(req, res) {
  console.log('run');
  const {} = req.params;
  const category = {};
  await db.addCategory(category);

  res.redirect('/categories');
}

async function updateCategoryGet(req, res) {
  const { id } = req.params;
  const category = await db.getCategoryById(id);
  res.render('categories/update', { category });
}

async function updateCategoryPost(req, res) {}

module.exports = {
  getCategories,
  getCategoryById,
  addCategoryGet,
  addCategoryPost,
  updateCategoryGet,
  updateCategoryPost,
};
