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
app.use('/static', express.static('public'));
app.use(routes);

// handles errors for no page found
app.use('/error', (req, res, next) => {
    const err = new Error('Oh no! You searched for page that does not exist!');
    err.status = 404;
    console.log(err.message);
   res.render('error', { err });
});

app.listen(3000, () => console.log('The server is running'));
