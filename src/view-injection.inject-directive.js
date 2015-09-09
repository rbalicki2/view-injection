'use strict';

angular.module('view-injection')
  .directive('inject', [

    '$parse',
    'view-injection.InjectionService',

    function(

      $parse,
      InjectionService

    ) {

      return {
        restrict: 'A',
        link: link
      };

      ////////////

      function link(scope, elem, attrs) {
        var injectionArray = $parse(attrs.inject)(scope);

        (injectionArray || []).forEach(function(serviceName) {
          scope[InjectionService.getNameFor(serviceName)] = InjectionService.get(serviceName);
        });
      }
    }
  ]);