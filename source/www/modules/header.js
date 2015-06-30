(function() {
  var app = angular.module('header', []);

  app.directive('header', function() {
    return {
      restrict: 'E',
      templateUrl: '/snippets/header.html'
    };
  });
})();
