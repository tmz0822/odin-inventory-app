const db = require('../db/items/queries');

const categoryQueries = require('../db/categories/queries');

async function getItems(req, res) {
  const items = await db.getItems();

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

async function updateItemGet(req, res) {
  const id = req.params.id;
  const categories = await categoryQueries.getCategories();
  const item = await db.getItemById(id);

  res.render('items/update', { item, categories });
}

async function updateItemPost(req, res) {
  const { id } = req.params;
  const { name, quantity, unitPrice, categoryId } = req.body;

  await db.updateItem(id, { name, quantity, unitPrice, categoryId });

  res.redirect('/items');
}

async function deleteItem(req, res) {
  const id = req.params.id;

  await db.deleteItem(id);

  res.redirect('/items');
}

module.exports = {
  getItems,
  addItemGet,
  addItemPost,
  getItemById,
  updateItemGet,
  updateItemPost,
  deleteItem,
};
