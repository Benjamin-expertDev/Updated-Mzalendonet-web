const express = require('express');
const router = express.Router();
const Post = require('../Models/post');

router.post('/posts', async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (error) {
    res.status(500).json({ message: 'Error creating post' });
  }
});

router.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts' });
  }
});

// ... Similar routes for update and delete

module.exports = router;
