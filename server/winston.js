'use strict';
const { createLogger, format, transports } = require('winston');
const fs = require('fs');
const path = require('path');
const appRoot = require('app-root-path');
const mkdirp = require('mkdirp');

const env = process.env.NODE_ENV || 'development';
const logDir = `${appRoot}/logs`;

if (!fs.existsSync(logDir)) {
  mkdirp(logDir, err => {
    if (err)
      logger.error(err);
    else
      logger.info(`Created directory at ${logDir}`);
  });
}

const filename = path.join(logDir, 'app.log');

const logger = createLogger({
  level: env === 'development' ? 'debug' : 'info',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.json()
  ),
  transports: [
    new transports.Console({
      level: 'info',
      format: format.combine(
        format.colorize(),
        format.printf(
          info => `${info.timestamp} ${info.level}: ${info.message}`
        )
      )
    }),
    new transports.File({ filename })
  ]
});

logger.stream = {
  write: (message, encoding) => {
    logger.info(message);
  }
}

module.exports = logger;