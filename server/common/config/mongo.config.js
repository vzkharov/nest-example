"use strict";
exports.__esModule = true;
exports.mongoConfig = void 0;
var config_1 = require("@nestjs/config");
exports.mongoConfig = (0, config_1.registerAs)('mongo', function () { return ({
    uri: 'mongodb://itsjustmongodbuser:anditsjustmongodbpassword@localhost:27017'
}); });
