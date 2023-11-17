const mongoose = require('mongoose');

const blohsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'a blog must have a title'],
    },
    body: {
      type: String,
      required: [true, 'a blog must have a body'],
    },
  },
  { timestamps: true }
);

const Blogs = mongoose.model('Blogs', blohsSchema);

module.exports = Blogs;
