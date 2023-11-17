const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const expressEjsLayouts = require('express-ejs-layouts');
const blogsRouter = require('./routers/blogsRouter');
const viewRouter = require('./routers/viewRouter');

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.static('public'));

//templating engine
app.use(expressEjsLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use('/api/v1/', blogsRouter);
app.use('/', viewRouter);

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => console.log('DATABASE CONNECTED...'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app listennig on port ${port}`);
});
