const bloggerController = require('../controllers/bloggerController');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


router.post('/',
  bloggerController.createBlogger,
  (req, res) => {
    res.status(200).json(res.locals.newBlogger);
  }
);

router.get('/:id',
  bloggerController.getOneBlogger,
  (req, res) => {
      res.status(200).json(res.locals.foundBlogger);
    }
);

// router.get('/',
// bloggerController.getAllBloggers,
//   (req, res) => {
//     res.status(200).json(res.locals.bloggers);
//   }
// );

// router.put('/:id',
// bloggerController.updateBlogger,
//   (req, res) => res.status(200).json({})
// );

// router.delete('/:id',
// bloggerController.deleteBlogger,
//   (req, res) => res.status(200).json({})
// );


module.exports = bloggerRouter;