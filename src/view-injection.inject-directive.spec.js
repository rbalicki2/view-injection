'use strict';

describe('inject directive', function() {
  var injectDirective,
      $compile,
      $rootScope;

  beforeEach(module('view-injection'));

  beforeEach(module(function($provide) {
    $provide.constant('a', 1);
    $provide.value('b', 2);
  }))

  beforeEach(inject(function($injector) {
    $compile = $injector.get('$compile');
    $rootScope = $injector.get('$rootScope');
  }));

  describe('regular syntax', function() {
    it('should have appropriate things set on the scope', function() {
      var compiledElement = makeDirectiveWithArray('["a", "b"]');
      expect(compiledElement.scope().a).toEqual(1);
      expect(compiledElement.scope().b).toEqual(2);
    });
  });

  describe('as syntax', function() {
    it('should have approrpate things set on scope', function() {
      var compiledElement = makeDirectiveWithArray('["a as aService", "b as bService"]');
      expect(compiledElement.scope().aService).toEqual(1);
      expect(compiledElement.scope().bService).toEqual(2);
    });
  });

  function makeDirectiveWithArray(str) {
    var element = '<div inject=\'' + str + '\'></div>';
    return $compile(element)($rootScope.$new());
  }
});