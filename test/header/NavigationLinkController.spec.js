/*global
    describe, beforeEach, module, inject, it, expect, spyOn
*/

(function () {
    'use strict';

    describe('Header navigation link controller ->', function () {

        beforeEach(module('header'));

        describe('isActive method', function () {
            var $scope, $location;

            /*jslint nomen: true*/
            beforeEach(inject(function ($rootScope, $controller, _$location_) {
                $scope = $rootScope.$new();
                $controller('NavigationLinkController', {$scope: $scope});
                $location = _$location_;
            }));
            /*jslint nomen: false*/

            it('should return true if the path to check matches the current location', function () {
                spyOn($location, 'path').and.returnValue('/blog.html');
                expect($scope.isActive('/blog.html')).toBe(true);
            });

            it('should return false if the path to check does not match the current location', function () {
                spyOn($location, 'path').and.returnValue('/calendar.html');
                expect($scope.isActive('/blog.html')).toBe(false);
            });
        });
    });
}());
