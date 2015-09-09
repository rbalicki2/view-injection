'use strict';

var gulpConfig = require('./gulp-tasks/config.json'),
    mainBowerFiles = require('main-bower-files'),
    files = getBowerFiles().concat(gulpConfig.selectors.srcScriptsAll);

module.exports = function(config) {
 config.set({
   frameworks: ['jasmine'],
   plugins: [
    'karma-jasmine',
    'karma-phantomjs-launcher'
   ],
   files: files,
   // start these browsers
   browsers: ['PhantomJS'],
   reporters: ['progress'],
   preprocessors: {
   },
   logLevel: config.LOG_INFO,
   singleRun: true
 });
};

// TODO DRY up... also used in build.js
function getBowerFiles() {
  var re = /.js$/,
      bowerMain = mainBowerFiles(gulpConfig.mainBowerFiles.options),
      matchingFiles = [];

  bowerMain.forEach(function(main) {
    if (typeof main === 'string') {
      ifMatchingPush(main);
    } else if (main.constructor === Array) {
      main.forEach(ifMatchingPush);
    }
  });

  return matchingFiles;

  /////////////////

  function ifMatchingPush(str) {
    re.exec(str) ? matchingFiles.push(str) : null;
  }
}