'use strict';

describe('example.example-service', function() {
  var exampleService;

  beforeEach(module('example'));
  beforeEach(inject(function($injector) {
    exampleService = $injector.get('example.example-service');
  }));

  it('should have value equal to 42', function() {
    expect(exampleService.value).toEqual(42);
  });
});