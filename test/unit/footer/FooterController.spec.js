/*global
    describe, beforeEach, module, inject, it, expect
*/

(function () {
    'use strict';
    describe('The FooterController ->', function () {
        var $scope;

        // Load the footer module, which contains the footer directive
        beforeEach(module('footer'));

        beforeEach(inject(function ($rootScope, $controller) {
            $scope = $rootScope.$new();
            $controller('FooterController', {$scope: $scope});
        }));

        it('has a date property containing a Date object', function () {
            expect($scope.date instanceof Date).toBe(true);
        });
    });
}());
