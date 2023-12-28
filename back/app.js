const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
const http = require('http');
require('dotenv').config();
const cors = require('cors');


const trainingsRouter = require('./routes/trainings');


const mongoConfig = require('./database/mongodb.json');
mongoose.set('strictQuery', false);
mongoose.connect(
  mongoConfig.mongo.uri,
  () => console.log('Connected to MongoDB!')
);


const app = express();
app.use(cors());
app.use(express.static('public'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



app.use('/trainings', trainingsRouter);


app.use((req, res, next) => {
  next(createError(404));
});


app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.json(err);
});


const server = http.createServer(app);
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
