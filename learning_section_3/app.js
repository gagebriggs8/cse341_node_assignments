const express = require('express');

const bodyParser = require('body-parser');
const path = require('path');
//const expressHbs = require('express-handlebars');

const errorController = require('./controllers/error');

const app = express();

//app.engine('hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs'}));
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// app.use((req, res, next) => {
//     console.log('First Middleware');
//     next();
// });

// app.use((req, res, next) => {
//     console.log('Second Middleware');
//     res.send('<p>Assignment almost solved!</p>');
// });

// app.use('/users', (req, res, next) => {
//     console.log('/users middlware');
//     res.send('<p>Handles /users</p>');
// });

// app.use('/', (req, res, next) => {
//     console.log('/ middlware');
//     res.send('<p>Handles /</p>');
// });

app.listen(3000);