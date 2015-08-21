// ============================= header.js ============================ //
// AngularJS module containing directives and controllers for the
// header.
// ==================================================================== //

/*global angular */
(function () {
    "use strict";

    var app = angular.module('header', []);

    // We must configure the location provider before it can be used
    app.config(['$locationProvider', function ($locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true,
            rewriteLinks: false
        });
    }]);

    /**
     * @memberof headerModule
     * @ngdoc directive
     * @name header
     *
     * @description
     * Generates the HTML for the header common to all webpages, including navigation links and branding.
     *
     * @example
     * <header></header>
     */
    app.directive('header', function () {
        return {
            restrict: 'E',
            templateUrl: '/snippets/header.tmpl.html'
        };
    });

    app.controller('NavigationLinkController', ['$scope', '$location', '$http', function ($scope, $location, $http) {
        $scope.isActive = function (pathToCheck) {
            return pathToCheck === $location.path();
        };

        $http.get('/data/navigation.json').then(
            // success
            function (response) {
                $scope.links = response.data;
            },
            // failure
            function () {
                $scope.links = [];
            }
        );
    }]);
}());
