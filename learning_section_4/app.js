var PORT = process.env.PORT || 3000;
const express = require('express');                 

const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    User.findById('609fb431c5f2638c9499079b')
        .then(user => {
            req.user = user;
            next();
        })
        .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
    .connect('mongodb+srv://GageBriggs1:GageBriggs1@cluster0.g0euz.mongodb.net/shop?retryWrites=true&w=majority')
    .then(result => {
        User.findOne().then(user=> {
            if (!user) {
                const user = new User ({
                    name: 'Gage',
                    email: 'gagebriggs8@hotmail.com',
                    cart: {
                        items: []
                    }
                });
                user.save();
            }
        })
        
        app.listen(3000);
    })
    .catch(err => console.log(err));
