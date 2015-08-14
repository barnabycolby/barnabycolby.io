/*global angular */
(function () {
    "use strict";

    var app = angular.module('header', []);

    // We must configure the location provider before it can be used
    app.config(['$locationProvider', function ($locationProvider) {
        $locationProvider.html5Mode(true);
    }]);

    app.directive('header', function () {
        return {
            restrict: 'E',
            templateUrl: '/snippets/header.html'
        };
    });

    app.controller('NavigationLinkController', ['$scope', '$location', function ($scope, $location) {
        $scope.isActive = function (pathToCheck) {
            return pathToCheck === $location.path();
        };
    }]);
}());
