const express = require('express');
const mongoose = require('mongoose');

const blogController = require('../controllers/blogController');

const router = express.Router();

router.post('/',
  blogController.createBlogpost,
  (req, res) => {
    res.status(200).json(res.locals.postBlog);
  }
);

router.get('/:id',
blogController.getOneBlogpost,
(req, res) => {
    res.status(200).json(res.locals.getCharacters);
  }
);

router.get('/',
blogController.getAllBlogposts,
  (req, res) => {
    res.status(200).json(res.locals.getCharacters);
  }
);

router.put('/:id',
blogController.modifyBlogpost,
  (req, res) => res.status(200).json({})
);

router.delete('/:id',
blogController.deleteBlogpost,
  (req, res) => res.status(200).json({})
);

module.exports = blogpostRouter;