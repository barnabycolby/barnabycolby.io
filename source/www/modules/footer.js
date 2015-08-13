/*global angular */
(function () {
    "use strict";

    var app = angular.module('footer', []);

    app.directive('footer', function () {
        return {
            restrict: 'E',
            templateUrl: '/snippets/footer.html'
        };
    });
}());
