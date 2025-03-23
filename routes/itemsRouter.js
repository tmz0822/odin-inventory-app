const { Router } = require('express');

const itemsRouter = Router();

const itemsController = require('../controllers/itemsController');

itemsRouter.get('/', itemsController.getItems);
itemsRouter.get('/add', itemsController.addItemGet);
itemsRouter.post('/add', itemsController.addItemPost);

itemsRouter.get('/:id', itemsController.getItemById);
itemsRouter.get('/:id/update', itemsController.updateItemGet);
itemsRouter.post('/:id/update', itemsController.updateItemPost);

itemsRouter.post('/:id/delete', itemsController.deleteItem);

module.exports = itemsRouter;
