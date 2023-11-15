const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
const app = express();

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => console.log('DATABASE CONNECTED...'));

const port = process.env.PORT | 3000;
app.listen(port, () => {
  console.log(`app listennig on port ${port}`);
});
