const express = require('express');
const routes = require('./routes');

const expressApp = express();

expressApp.use(cors());
expressApp.use(express.json());
expressApp.use(routes);

expressApp.listen(3333);