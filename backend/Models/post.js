const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  date: { type: Date, default: Date.now },
});
//const Post = mongoose.model('Post', postSchema);
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
