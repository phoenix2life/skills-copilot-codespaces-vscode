// Create web server
// http://localhost:3000/comments

const express = require('express');
const router = express.Router();
const { comments } = require('../data/comments');

// Get all comments
router.get('/', (req, res) => {
  res.json(comments);
});

// Get a single comment
router.get('/:id', (req, res) => {
  const found = comments.some((comment) => comment.id === req.params.id);

  if (found) {
    res.json(comments.filter((comment) => comment.id === req.params.id));
  } else {
    res.status(400).json({ msg: `No comment with the id of ${req.params.id}` });
  }
});

// Create a comment
router.post('/', (req, res) => {
  const newComment = {
    id: uuid.v4(),
    text: req.body.text,
  }
});