const { Router } = require('express');

const categoriesRouter = Router();

const categoriesController = require('../controllers/categoriesController');

categoriesRouter.get('/', categoriesController.getCategories);

categoriesRouter.get('/add', categoriesController.addCategoryGet);

categoriesRouter.post('/add', categoriesController.addCategoryPost);

categoriesRouter.get('/:id', categoriesController.getCategoryById);

categoriesRouter.get('/:id/update', categoriesController.updateCategoryGet);

categoriesRouter.post('/:id/update', categoriesController.updateCategoryPost);

module.exports = categoriesRouter;
