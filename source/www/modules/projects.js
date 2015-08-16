// =========================== projects.js ============================ //
// AngularJS module for the projects.html page. Creates HTML based on
// a projects.json data file.
// ==================================================================== //

/*global angular */
(function () {
    "use strict";

    var app = angular.module('projects', ['header', 'footer']);

    app.directive('projects', ['$http', function ($http) {
        return {
            restrict: 'E',
            templateUrl: '/snippets/projects.tmpl.html',
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
