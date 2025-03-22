const db = require('../db/items/queries');

const categoryQueries = require('../db/categories/queries');

async function getItems(req, res) {
  const items = await db.getItems();

  console.log(items);

  res.render('items/index', {
    title: 'View items',
    items,
  });
}

async function getItemById(req, res) {
  const { id } = req.params;
  const item = await db.getItemById(id);

  res.send('getting item by id');
}

async function addItemGet(req, res) {
  const categories = await categoryQueries.getCategories();

  res.render('items/add', {
    title: 'Add item',
    categories,
  });
}

async function addItemPost(req, res) {
  const { name, quantity, unitPrice, categoryId } = req.body;

  await db.addItem({ name, quantity, unitPrice, categoryId });

  res.redirect('/');
}

function updateItemGet(req, res) {
  res.render('items/update');
}

async function updateItemPost(req, res) {
  const { id } = req.params;
  const { name, quantity, unitPrice, categoryId } = req.body;
  await db.updateItem(id, { name, quantity, unitPrice, categoryId });
}

module.exports = {
  getItems,
  addItemGet,
  addItemPost,
  getItemById,
  updateItemGet,
  updateItemPost,
};
