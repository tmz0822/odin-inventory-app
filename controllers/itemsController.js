const db = require('../db/items/queries');

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

module.exports = { getItems, getItemById };
