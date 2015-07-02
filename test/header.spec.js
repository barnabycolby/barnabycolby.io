describe('The header element directive', function () {
  var $compile, $rootScope;

  // Load the header module, which contains the header directive
  beforeEach(module('header'));

  // Load the templates
  beforeEach(module('/snippets/header.html'));

  // Store references to $rootScope and $compile
  // so they are available in all tests in this describe block
  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('contains my name as a link to the homepage', function () {
    var element = $compile("<header></header>")($rootScope);
    $rootScope.$digest();

    expect(element.html()).toContain("<a href=\"/\">Barnaby Colby</a>");
  });
});
