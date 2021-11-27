const express = require('express');
const app = express();
const server = require('http').Server(app);
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const dir = './src';

const nextApp = next({ dev, dir });
const handle = nextApp.getRequestHandler();

// require('dotenv').config({ path: './config.env' });
// const connectDb = require('./utilsServer/connectDb');

const PORT = process.env.PORT || 3000;

app.use(express.json());

// connectDb();

nextApp
  .prepare()
  .then(() => {
    // app.use("/api/signup", require("./api/signup"));
    // app.use("/api/auth", require("./api/auth"));

    app.all('*', (req, res) => handle(req, res));

    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`Express server running on ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(error.stack);
    process.exit(1);
  });
