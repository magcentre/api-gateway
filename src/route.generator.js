const fs = require('fs');

const path = require('path');

const allRoutes = [];

const routesFolder = __dirname + "/routes/";

fs
    .readdirSync(routesFolder)
    .forEach(file => {
        allRoutes.push(require(path.join(routesFolder, file)));
    });

module.exports = allRoutes;