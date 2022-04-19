const { Blogger, Blogpost } = require('../models/blogModels');
const mongoose = require('mongoose');

const bloggerController = {

    createBlogger : (req, res, next) => {
        const { firstName, lastName, bio } = req.body;
        if(!firstName || !lastName || !bio){
            return next({
                log: 'There\'s an error in createBlogger',
                status: 500,
                message: {err: 'Missing info to create new blogger.'}
            });
        } else {
            const newBlogger = { firstName, lastName, bio }
            models.Blogger.create(newBlogger, (err, newBlogger) => {
                if(err){
                    return next('Error in createBlogger: ', err)
                } else {
                    res.locals.newBlogger = newBlogger;
                    next();
                }
            }) 
        }
    },

    findBlogger: (req, res, next) => {
        const foundBlogger = Blogger.findById(req.params.id, (err, foundBlogger) => {
            if(err){
                return next({
                log: 'There\'s an error in findBlogger',
                status: 500,
                message: {err: 'Missing or incorrect info to find blogger.'}
                })
            } else {
                res.locals.foundBlogger = foundBlogger;
            }
        });
    return next();
    }
};

module.exports = bloggerController;
