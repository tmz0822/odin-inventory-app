const db = require('../db/categories/queries');

async function getCategories(req, res) {
  // get from database
  const categories = await db.getCategories();

  res.render('categories/index', { categories });
}

async function getCategoryById(req, res) {
  const { id } = req.params;
  const category = await db.getCategoryById(id);

  res.render(`categories/details`, { category });
}

function addCategoryGet(req, res) {
  //navigate to add category page

  res.render('categories/add');
}

async function addCategoryPost(req, res) {
  const { name, description } = req.body;
  await db.addCategory({ name, description });

  res.redirect('/categories');
}

async function updateCategoryGet(req, res) {
  const { id } = req.params;
  const category = await db.getCategoryById(id);
  res.render('categories/update', { category });
}

async function updateCategoryPost(req, res) {
  const { id } = req.params;
  const { name, description } = req.body;
  await db.updateCategory(id, { name, description });

  res.redirect(`/categories/`);
}

async function deleteCategory(req, res) {
  const { id } = req.params;

  const categoryItemCount = await db.getCategoryItemCount(id);

  if (categoryItemCount > 0) {
    res.render('../views/partials/alert', {
      message: 'Failed to delete the category that has items.',
      href: '/categories',
    });
  } else {
    await db.deleteCategory(id);
    res.redirect('/categories');
  }
}

module.exports = {
  getCategories,
  getCategoryById,
  addCategoryGet,
  addCategoryPost,
  updateCategoryGet,
  updateCategoryPost,
  deleteCategory,
};
