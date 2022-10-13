var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const Sequelize = require("./db.connection")

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login')

var app = express();

const bodyParser = require('body-parser')

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter)

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

/* BEGIN db initialization */
// const Op = {}
// const dbConfig = require("./db.config.js");
// const Sequelize2 = require("sequelize");
// const connection = new Sequelize2(dbConfig.DB, dbConfig.USER,
//   dbConfig.PASSWORD, {
//   host: dbConfig.HOST,
//   dialect: dbConfig.dialect,
//   pool: dbConfig.pool
// });
/* END db initialization */
const User = require("./models/user.model")(Sequelize.connection, Sequelize.library);
User.sync({ force: false, alter: true });

const Session = require("./models/session.model")(Sequelize.connection, Sequelize.library);
Session.belongsTo(User);
Session.sync({ force: false, alter: true });

module.exports = app;
