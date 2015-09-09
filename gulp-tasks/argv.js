'use strict';

var yargs = require('yargs'),
    config = require('./config.json');

module.exports = yargs.default(config.argv).argv;