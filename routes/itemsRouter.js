const { Router } = require('express');

const itemsRouter = Router();

const itemsController = require('../controllers/itemsController');

itemsRouter.get('/', itemsController.getItems);
itemsRouter.get('/:id', itemsController.getItemById);
itemsRouter.post('/add');

module.exports = itemsRouter;
