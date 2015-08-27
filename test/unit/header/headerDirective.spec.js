/*global
    describe, beforeEach, module, inject, it, expect, console
*/

(function () {
    'use strict';

    describe('Header directive ->', function () {
        var $compile, $rootScope, $httpBackend;

        beforeEach(module('header'));

        // Load the templates
        beforeEach(module('/snippets/header.tmpl.html'));

        // Store references to $rootScope and $compile
        // so they are available in all tests in this describe block
        beforeEach(inject(function ($injector) {
            $compile = $injector.get('$compile');
            $rootScope = $injector.get('$rootScope');
            $httpBackend = $injector.get('$httpBackend');

            $httpBackend.whenGET('/data/navigation.json').respond(200, '[{"text":"Projects","href":"/projects.html"}]');
        }));

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
}());
