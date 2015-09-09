'use strict';

describe('inject', function() {
  var injectFilter;

  beforeEach(module('view-injection'));

  beforeEach(module(function($provide) {
    $provide.constant('a', 1);
    $provide.value('b', 2);
  }))

  beforeEach(inject(function($injector) {
    injectFilter = $injector.get('$filter')('inject');
  }));

  it('should return the correct values for a and b', function() {
    expect(injectFilter('a')).toEqual(1);
    expect(injectFilter('b')).toEqual(2);
  });
});