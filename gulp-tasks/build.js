'use strict';

var gulp = require('gulp'),
    pkg = require('../package.json'),
    config = require('./config.json'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    iife = require('gulp-iife'),
    indent = require('gulp-indent');

gulp.task('build', function() {
  return gulp
    .src(config.selectors.srcScripts)
    .pipe(indent(config.indent.options))
    .pipe(iife(config.iife.options))
    .pipe(concat(pkg.name + '.js'))
    .pipe(gulp.dest(process.cwd()))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest(process.cwd()));
});