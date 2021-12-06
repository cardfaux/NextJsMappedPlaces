const express = require('express');
const app = express();
const server = require('http').Server(app);
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const dir = './src';

const nextApp = next({ dev, dir });
const handle = nextApp.getRequestHandler();

require('dotenv').config({ path: './api/config.env' });
// const connectDb = require('./utilsServer/connectDb');

const PORT = process.env.PORT || 3000;

const placesRoutes = require('./api/routes/places-routes');
const usersRoutes = require('./api/routes/users-routes');

const HttpError = require('./api/models/http-error');

// connectDb();

app.use(express.json());

nextApp
  .prepare()
  .then(() => {
    app.use('/api/places', placesRoutes);
    app.use('/api/users', usersRoutes);

    app.all('*', (req, res) => handle(req, res));

    app.use((req, res, next) => {
      const error = new HttpError('Could not find this route', 404);
      throw error;
    });

    app.use((error, req, res, next) => {
      if (res.headerSent) {
        return next(error);
      }
      res.status(error.code || 500);
      res.json({ message: error.message || 'An unkown error occured!' });
    });

    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`Express server running on ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(error.stack);
    process.exit(1);
  });
