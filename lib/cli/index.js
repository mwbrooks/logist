/*!
 * Module dependencies.
 */

var optimist = require('optimist'),
    logist = require('../logist');

/**
 * CLI execution.
 *
 * Routes the command-line request into the node module.
 *
 * @param {String} argv is identical to process.argv.
 */

module.exports.exec = function(argv) {
  argv = optimist.parse(argv);
};
