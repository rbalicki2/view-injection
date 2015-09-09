'use strict';

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    notify = require('gulp-notify'),
    config = require('./config.json'),
    argv = require('./argv.js');

gulp.task('lint', ['lint-src', 'lint-gulp']);

gulp.task('lint-src', function() {
  return gulp
    .src(config.selectors.srcScripts)
    .pipe(jshint(config.lint.options.src))
    .pipe(jshint.reporter(stylish))
    .pipe(jshint.reporter('fail'))
    .on('error', function(err) {
      if (argv.notify) {
        notify.onError(function(err) {
          return 'lint error ' + err.message;
        })(err);
      }
    });
});

gulp.task('lint-gulp', function() {
  return gulp
    .src(config.selectors.gulpScripts)
    .pipe(jshint(config.lint.options.gulp))
    .pipe(jshint.reporter(stylish))
    .pipe(jshint.reporter('fail'))
    .on('error', function(err) {
      if (argv.notify) {
        notify.onError(function(err) {
          return 'lint error ' + err.message;
        })(err);
      }
    });
});