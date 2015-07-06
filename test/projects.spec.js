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

  it('creates a h3 element for each object in the array with the correct text', function () {
    $httpBackend.whenGET('/data/projects.json').respond(200, '[{"name":"Website"},{"name":"Backup Server"},{"name":"VPN Server"}]');

    var element = $compile("<projects></projects>")($rootScope);
    $rootScope.$digest();
    $httpBackend.flush();

    var h3s = element.find('h3');
    expect(h3s.length).toBe(3);
    expect(h3s.eq(0).text()).toBe('Website');
    expect(h3s.eq(1).text()).toBe('Backup Server');
    expect(h3s.eq(2).text()).toBe('VPN Server');
  });
});
