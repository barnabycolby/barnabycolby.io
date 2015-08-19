/*global
    describe, beforeEach, module, inject, it, expect, spyOn
*/

(function () {
    'use strict';

    describe('Header navigation link controller ->', function () {

        beforeEach(module('header'));

        var $scope;

        beforeEach(inject(function ($rootScope, $controller) {
            $scope = $rootScope.$new();
            $controller('NavigationLinkController', {$scope: $scope});
        }));

        describe('isActive method', function () {
            var $location;

            /*jslint nomen: true*/
            beforeEach(inject(function (_$location_) {
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

        describe('links property', function () {
            var $httpBackend;

            beforeEach(inject(function ($injector) {
                $httpBackend = $injector.get('$httpBackend');
            }));

            it('should be an empty array when navigation data file does not exist', function () {
                $httpBackend.whenGET('/data/navigation.json').respond(404, '');
                $httpBackend.flush();
                expect($scope.links).toEqual([]);
            });

            it('should return an object equal to the contents of the navigation data when it exists', function () {
                $httpBackend.whenGET('/data/navigation.json').respond(200, '[{"text":"Blog","href":"/blog.html"}]');
                $httpBackend.flush();
                expect($scope.links).toEqual([
                    {"text": "Blog", "href": "/blog.html"}
                ]);
            });
        });
    });
}());
