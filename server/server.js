const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const scoreRouter = require('./routes/score.router');
const userRouter = require('./routes/user.router');
const ratingsRouter = require('./routes/ratings.router');
const amazonRouter = require('./routes/amazon.api.router')
const barRouter = require('./routes/bar.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

//start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/submitScore', scoreRouter)
app.use('/api/user', userRouter);
app.use('/ratings', ratingsRouter);
app.use('/picture', amazonRouter);
// app.use('/barlookup', barRouter)

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});