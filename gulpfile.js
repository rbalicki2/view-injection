'use strict';

var requireDir = require('require-dir'),
    // causes gulp to load all the necessary tasks:
    dir = requireDir('./gulp-tasks'),
    gulp = require('gulp'),
    argv = require('./gulp-tasks/argv.js'),
    config = require('./gulp-tasks/config.json'),
    runSequence = require('run-sequence');

gulp.task('default', function() {
  var tasks = [];

  (argv.lint) ? tasks.push('lint') : null;
  (argv.test) ? tasks.push('test') : null;
  (argv.build) ? tasks.push('build') : null;
  (argv.watch) ? tasks.push('watch') : null;

  runSequence.apply(this, tasks);
});