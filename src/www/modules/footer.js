// ============================= footer.js ============================ //
// AngularJS code for the footer.
// ==================================================================== //

/*global angular */
(function () {
    "use strict";

    var app = angular.module('footer', []);

    app.directive('footer', function () {
        return {
            restrict: 'E',
            templateUrl: '/snippets/footer.tmpl.html'
        };
    });

    app.controller('FooterController', ['$scope', function ($scope) {
        $scope.date = new Date();
    }]);

    app.directive('contactbuttons', ['$http', function ($http) {
        return {
            restrict: 'E',
            templateUrl: '/snippets/contactButtons.tmpl.html',
            controller: function () {
                var contactButtonsController = this;
                $http.get('/data/contactButtons.json').success(function (data) {
                    contactButtonsController.contactButtons = data;
                });
            },
            controllerAs: 'contactButtonsController'
        };
    }]);
}());
