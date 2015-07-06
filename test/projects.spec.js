describe('The projects element directive', function () {
  var $compile, $rootScope, $httpBackend;

  // Load the project module, which contains the projects directive
  beforeEach(module('projects'));

  // Load the templates
  beforeEach(module('/snippets/projects.html'));

  // Store references to $rootScope and $compile
  // so they are available in all tests in this describe block
  beforeEach(inject(function ($injector) {
    $compile = $injector.get('$compile');
    $rootScope = $injector.get('$rootScope');
    $httpBackend = $injector.get('$httpBackend');
  }));

  it('does not expand to anything when projects.json is empty', function () {
    $httpBackend.whenGET('/data/projects.json').respond(200, '');

    var element = $compile("<projects></projects>")($rootScope);
    $rootScope.$digest();
    $httpBackend.flush();

    expect(element.find('h3').length).toBe(0);
  });
});
