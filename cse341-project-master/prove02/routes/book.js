const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const books = []

router.get('/book', (req, res, next) => {
    res.render('book', { pageTitle: 'Add Book', path: '/book', bookCSS: true, activeBook: true});
});

router.post('/book', (req, res, next) => {
    books.push({title: req.body.title, description: req.body.description});
    res.redirect('/');
});

exports.routes = router;
exports.books = books;