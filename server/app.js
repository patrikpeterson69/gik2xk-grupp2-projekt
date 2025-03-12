var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Rätt route-filer används
app.use('/cart', require('./routes/cartRoutes'));
app.use('/users', require('./routes/usersRoute'));
app.use('/productRoutes', require('./routes/productRoutes'));
app.use('/ratings', require('./routes/ratingsRoutes'));

module.exports = app;
