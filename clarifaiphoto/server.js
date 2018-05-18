const express = require("express");
const logger =  require('morgan');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const usersRoute = require("./routes/usersRoute");
const clarifaiUtil = require('./clarifai/clarifaiUtil');
const cookieSession = require("cookie-session")
const passport = require("passport");
const session = require("express-session")
const keys = require("./config/keys")
const authRoute = require("./routes/authRoute")
const passportSetup = require("./config/passport")

const app = express();
app.use(cookieSession({
  maxAge:24*60*60*1000,
  keys: [keys.session.cookieKey]
}))

//Database
mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/clarifaiproject"
);

app.use(passport.initialize())
app.use(passport.session());

//Middlewares
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes
app.use("/auth", authRoute)
app.use('/', usersRoute);


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Catch 404 Errors and forward them to arror handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//Error handler functionb
app.use((err, req, res, next) => {
  const error = app.get('env') === 'dev' ? err : {};
  const status = err.status || 500;
  //respond to client 
  res.status(status).json({
    error: {
      message: error.message
    }
  });
  //respond to terminal
  console.error(err);
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
  console.log('=====> WTF, this server really started?')
});

