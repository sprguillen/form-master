const config = require('../config');
const environment = process.env.NODE_ENV || 'development';
global.envConf = config[environment];
global.logger = require('../winston');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const mongoose = require('mongoose');
const port = process.env.PORT || envConf.serverPort;

const app = express();
app.use(morgan('combined', { stream: logger.stream }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());

const uri = `mongodb://${envConf.hostName}:${envConf.dbPort}/${envConf.dbName}`;

mongoose.connect(uri, { useNewUrlParser: true })
  .then(() => logger.info(`Successfully connected to MongoDB port ${envConf.dbPort}`))
  .catch(err => logger.error(err));

// Require routers for the backend
const Users = require('../routes/Users');

app.use('/api', Users);

app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});