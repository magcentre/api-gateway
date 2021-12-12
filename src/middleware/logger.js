const logger = require('@magcentre/logger-helper');

module.exports = (req, res, next) => {
  logger.info(`Request method ${req.method} path ${req.path}`);
  return next();
};
