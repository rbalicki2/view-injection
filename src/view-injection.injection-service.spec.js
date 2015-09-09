'use strict';

describe('view-injection.InjectionService', function() {
  var InjectionService;

  beforeEach(module('view-injection'));

  beforeEach(module(function($provide) {
    $provide.constant('a', 1);
    $provide.value('b', 2);
  }))

  beforeEach(inject(function($injector) {
    InjectionService = $injector.get('view-injection.InjectionService');
  }));

  describe('get', function() {
    it('simple syntax', function() {
      expect(InjectionService.get('a')).toEqual(1);
      expect(InjectionService.get('b')).toEqual(2);
    });

    it('as syntax', function() {
      expect(InjectionService.get('a as aService')).toEqual(1);
      expect(InjectionService.get('b as bService')).toEqual(2);
    });
  });

  describe('getNameFor', function() {
    it('simple syntax', function() {
      expect(InjectionService.getNameFor('a')).toEqual('a');
      expect(InjectionService.getNameFor('b')).toEqual('b');
    });

    it('as syntax', function() {
      expect(InjectionService.getNameFor('a as aService')).toEqual('aService');
      expect(InjectionService.getNameFor('b as bService')).toEqual('bService');
    });
  });

  describe('getServiceName', function() {
    it('simple syntax', function() {
      expect(InjectionService.getServiceName('a')).toEqual('a');
      expect(InjectionService.getServiceName('b')).toEqual('b');
    });

    it('as syntax', function() {
      expect(InjectionService.getServiceName('a as aService')).toEqual('a');
      expect(InjectionService.getServiceName('b as bService')).toEqual('b');
    });
  });

});