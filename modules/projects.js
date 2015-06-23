(function () {
  var app = angular.module('projects', ['header']);

  app.directive('projects', function() {
    return {
      restrict: 'E',
      templateUrl: 'snippets/projects.html',
      controller: function () {
        this.projects = [
        ];
      },
      controllerAs: 'projectsController'
    };
  });
})()
