// =========================== projects.js ============================ //
// AngularJS module for the projects.html page. Creates HTML based on
// a projects.json data file.
// ==================================================================== //

/*global angular */
(function () {
    "use strict";

    var app = angular.module('projects', ['footer']);

    /**
     * @memberof projectsModule
     * @ngdoc directive
     * @name projects
     *
     * @description Generates a block of HTML describing the projects Barney is currently working on. The data about the projects is retrieved from the /data/projects.json file.
     *
     * @example
     * <projects></projects>
     */
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
