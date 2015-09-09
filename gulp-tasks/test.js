'use strict';

var gulp = require('gulp'),
    path = require('path'),
    karma = require('karma'),
    notify = require('gulp-notify'),
    config = require('./config.json'),
    argv = require('./argv.js');

gulp.task('test', function(done) {
  new (karma.Server)({
    configFile: path.join(process.cwd(), config.test.karma.conf),
    singleRun: true
  }, function(err) {
    if (err) {
      if (argv.notify) {
        notify.onError(function(err) {
          return 'unit tests failed';
        })(err);
      }
      done(new Error(err));
    } else {
      done();
    }
  }).start();
});