require('dotenv').config();
const express = require('express');
const app = express();
const path = require('node:path');
const session = require('express-session');

const itemsRouter = require('./routes/itemsRouter');
const categoriesRouter = require('./routes/categoriesRouter');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/items', itemsRouter);
app.use('/categories', categoriesRouter);

app.use('/', (req, res) => {
  res.render('index');
});

app.use((err, req, res, next) => {
  console.error(err);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Inventory management app listening on port ${PORT}`);
});
