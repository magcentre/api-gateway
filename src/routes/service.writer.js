const axios = require('axios');
const logger = require('@magcentre/logger-helper');
const config = require('../config');

module.exports = {
  prefix: '/object-writer',
  target: config.objectWriter,
  middlewares: [
    async (req, res, next) => {
      try {
        const systemCheck = await axios.get(`${config.objectWriter}/system-health`);
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
