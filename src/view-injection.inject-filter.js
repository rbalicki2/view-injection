'use strict';

angular.module('view-injection')
  .filter('inject', [
    'view-injection.InjectionService',

    function(InjectionService) {

      return function inject(val) {
        return InjectionService.get(val);
      };

    }
  ]);