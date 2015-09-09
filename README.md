# Angular Library Boilerplate

> A great boilerplate for making and publishing an Angular library

## What is Angular Library Boilerplate?

**Angular library boilerplate** is an opinionated starter project that contains the build process you need but don't want to deal with.

## Quick start

```sh
git clone https://github.com/rbalicki2/angular-library-boilerplate
cd angular-library-boilerplate
npm install
npm install -g gulp
bower install
gulp                # gulp lint, test, build, watch
cat angular-library-boilerplate.js
```

## Quick reference: command line

```sh
gulp # gulp lint, test, build and watch
gulp lint
gulp test
gulp build
gulp watch
```

## Basics

* Rename your project in package.json and bower.json
* Put your source code into src/
* All your source code is concatenated and minified and put into <project-name>.js and <project-name>.min.js
* See gulp-tasks/config.json for options passed to jshint, spec, etc. as well as command line options

## Choices

* jshint for linting
* karma and jasmine for unit testing

## Contact

Robert Balicki, robert.balicki@gmail.com