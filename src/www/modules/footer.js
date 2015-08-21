// ============================= footer.js ============================ //
// AngularJS code for the footer.
// ==================================================================== //

/*global angular */
(function () {
    "use strict";

    var app = angular.module('footer', []);

    /**
     * @memberof footerModule
     * @ngdoc directive
     * @name footer
     * @description The footer tag generates HTML code common to all webpages.
     * @example
     * <footer></footer>
     */
    app.directive('footer', function () {
        return {
            restrict: 'E',
            templateUrl: '/snippets/footer.tmpl.html'
        };
    });

    /**
     * @memberof footerModule
     * @ngdoc controller
     * @name FooterController
     * @description Initialises any objects required by the footer html.
     * @requires $scope
     */
    app.controller('FooterController', ['$scope', function ($scope) {
        $scope.date = new Date();
    }]);

    /**
     * @memberof footerModule
     * @ngdoc directive
     * @name contactbuttons
     * @requires $http
     *
     * @description
     * Generates the HTML containing a hyperlink button for each of the defined contact methods. The button contains a specified font awesome icon.
     *
     * @example
     * <contactbuttons></contactbuttons>
     */
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
