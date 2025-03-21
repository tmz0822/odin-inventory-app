const express = require('express');
const app = express();
const path = require('node:path');

const inventoryRouter = require('./routes/inventoryRouter');
const categoryRouter = require('./routes/categoryRouter');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use('/inventory', inventoryRouter);
app.use('/category', categoryRouter);

app.use('/', (req, res) => {
  res.render('index');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Inventory management app listening on port ${PORT}`);
});
