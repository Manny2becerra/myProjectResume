// creating server
const express = require('express');
const app = express();

// adds necessary middleware 
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.set('view engine', 'pug');
const routes = require('./routes/index.js');

// handles routes
app.use(routes);

// handles errors for no page found
app.use((req, res, next) => {
    const err = new Error('Sorry! This page doesnt exist');
    err.status = 400;
    next(err);
});

app.use((err, req, res, next) => {
    res.render('/err', {message: err.message, status: err.status});
});

app.listen(3000, () => console.log('The server is running'));
