'use strict';

angular.module('view-injection')
  .factory('view-injection.InjectionService', [

    '$injector',

    function($injector) {

      var splitString = ' as ';

      return {
        get: get,
        getNameFor: getNameFor,
        getServiceName: getServiceName
      };

      //////////

      function get(serviceName) {
        return $injector.get(getServiceName(serviceName));
      }

      function getNameFor(serviceName) {
        return ((serviceName || '').split(splitString) || [])[1] || serviceName;
      }

      function getServiceName(serviceName) {
        return (serviceName || '').split(splitString)[0];
      }

    }
  ]);