/*global angular */
(function () {
    "use strict";

    var app = angular.module('projects', ['header', 'footer']);

    app.directive('projects', ['$http', function ($http) {
        return {
            restrict: 'E',
            templateUrl: '/snippets/projects.html',
            controller: function () {
                var projectsController = this;
                $http.get('/data/projects.json').success(function (data) {
                    projectsController.projects = data;
                });
            },
            controllerAs: 'projectsController'
        };
    }]);
}());
