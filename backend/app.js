var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');
var cors = require('cors')
// var cookieParser = require('cookie-parser');
// app.use(cookieParser());

var profileRouter = require('./routes/profileRouter');

var app = express()


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors(
  {
    origin: true,
    credentials: true
  }
))

app.use('/profile', profileRouter)




// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
