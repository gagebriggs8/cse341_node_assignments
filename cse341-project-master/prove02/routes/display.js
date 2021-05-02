const path = require('path');

const rootDir = require('../util/path');

const express = require('express');
const book = require('./book');

const router = express.Router();

router.get('/', (req, res, next) => {
    const books = book.books;
    console.log(books);
    res.render('display', {prods: books, pageTitle: 'Display', path: '/', hasBooks: books.length > 0, activeDisplay: true, bookCSS: true});    
});


module.exports = router;