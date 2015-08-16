/*global
    describe, beforeEach, module, inject, it, expect, spyOn
*/

(function () {
    'use strict';
    describe('Header module ->', function () {

        beforeEach(module('header'));

        describe('Header directive ->', function () {
            var $compile, $rootScope;

            // Load the templates
            beforeEach(module('/snippets/header.tmpl.html'));

            // Store references to $rootScope and $compile
            // so they are available in all tests in this describe block
            /*jslint nomen: true*/
            beforeEach(inject(function (_$compile_, _$rootScope_) {
                $compile = _$compile_;
                $rootScope = _$rootScope_;
            }));
            /*jslint nomen: false*/

            it('contains my name as a link to the homepage', function () {
                var element, nameAsHomepageLinkMatches;

                element = $compile("<header></header>")($rootScope);
                $rootScope.$digest();

                nameAsHomepageLinkMatches = element.find('a[href="/"]:contains("Barnaby Colby")');

                expect(nameAsHomepageLinkMatches.length).toBeGreaterThan(0);
            });

            it('does not add the active class to any of the navigation links when on the home page', function () {
                var element, activeNavigationLinks;

                element = $compile("<header></header>")($rootScope);
                $rootScope.$digest();

                activeNavigationLinks = element.find('.headernav li.active');

                expect(activeNavigationLinks.length).toBe(0);
            });
        });

        describe('NavigationLinkController isActive method', function () {
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
