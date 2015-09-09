'use strict';

var gulp = require('gulp'),
    argv = require('./argv.js'),
    config = require('./config.json'),
    runSequence = require('run-sequence');

gulp.task('watch', function() {

  var tasks = [];

  (argv.gulp) ? tasks.push('watch-gulp') : null;
  (argv.src) ? tasks.push('watch-src') : null;

  return runSequence(tasks);
});

gulp.task('watch-gulp', function() {

  var tasks = [];

  argv.lint ? tasks.push('lint-gulp') : null;
  // TODO add a "reset gulp" task...

  if (tasks.length) {
    return gulp.watch(config.selectors.gulpScripts,
      { interval: 500 },
      function() {
        runSequence.apply(this, tasks);
      });
  }
});

gulp.task('watch-src', function() {

  var tasks = [];

  argv.lint ? tasks.push('lint-src') : null;
  argv.test ? tasks.push('test') : null;
  argv.build ? tasks.push('build') : null;

  if (tasks.length) {
    return gulp.watch(config.selectors.srcScriptsAll,
      { interval: 500 },
      function() {
        runSequence.apply(this, tasks);
      });
  }
});