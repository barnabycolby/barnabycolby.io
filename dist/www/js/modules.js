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

// ============================= index.js ============================= //
// Angular module for the index.html page.
// ==================================================================== //

/*global angular */
(function () {
    "use strict";

    angular.module('index', ['header', 'footer']);
}());

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
