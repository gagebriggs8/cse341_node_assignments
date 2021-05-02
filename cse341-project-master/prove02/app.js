const express = require('express');

const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const bookInput = require('./routes/book');
const display = require('./routes/display');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(bookInput.routes);
app.use(display);

app.listen(3000);