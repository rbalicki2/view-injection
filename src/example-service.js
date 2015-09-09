'use strict';

angular.module('example', [])
  .factory('example.example-service', function() {
    return {
      value: 42
    };
  });