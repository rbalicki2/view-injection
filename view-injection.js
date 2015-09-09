;(function() {
  'use strict';

  angular.module('view-injection', []);
}());

;(function() {
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
}());

;(function() {
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
}());

;(function() {
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
}());
