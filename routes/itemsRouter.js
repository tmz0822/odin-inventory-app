const { Router } = require('express');

const itemsRouter = Router();

const itemsController = require('../controllers/itemsController');

itemsRouter.get('/', itemsController.getItems);
itemsRouter.get('/add', itemsController.addItemGet);
itemsRouter.post('/add', itemsController.addItemPost);

itemsRouter.get('/:id', itemsController.getItemById);

module.exports = itemsRouter;
