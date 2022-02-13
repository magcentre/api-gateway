const axios = require('axios');

const logger = require('@magcentre/logger-helper');

const config = require('../config');

module.exports = {
  prefix: '/notification',
  target: config.notification,
  middlewares: [
    async (req, res, next) => {
      try {
        const systemCheck = await axios.get(`${config.notification}/system-health`);
        if (systemCheck) return next();
      }
      catch (e) {
        logger.error(e);
        res.statusCode = 400;
        res.send(JSON.stringify({ error: e }));
      }
    },
  ],
};
