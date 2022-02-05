const axios = require('axios');
const logger = require('@magcentre/logger-helper');
const config = require('../config');


module.exports = {
  prefix: '/reader',
  target: config.objectReader,
  middlewares: [
    async (req, res, next) => {
      try {
        const systemCheck = await axios.get(`${config.objectReader}/system-health`);
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
