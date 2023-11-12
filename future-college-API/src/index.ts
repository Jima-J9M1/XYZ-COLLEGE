import 'reflect-metadata';
import { Express,Request,Response } from 'express';
import { AppDataSource } from './data-source';

const bodyParser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');


dotenv.config();
const app:Express = express();


// Middleware
app.use(bodyParser.json());
app.use(cors());
// Router middleware
const studentRouter = require('../src/routers/Student');
const courseRouter = require('../src/routers/Course');
const enrollRouter = require('../src/routers/Enroll');
const gradeRouter = require('../src/routers/Grade');

const initializeApp = async () => {
  
  await AppDataSource.initialize();

  // Use express.Router for modular route definitions
  app.use('/api', studentRouter);
  app.use('/api', courseRouter);
  app.use('/api', enrollRouter);
  app.use('/api', gradeRouter);

  // Mount the router at the '/api' path

  app.use((req, res) => {
    res.status(404).send('404 - Endpoint Not Found');
  });

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`[port]:Server is running at http://localhost:${port}`);
  });
};

// Call the asynchronous initialization function
initializeApp();