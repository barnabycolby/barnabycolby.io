/*global
    describe, beforeEach, module, inject, it, expect
*/

(function () {
    'use strict';
    describe('The header element directive', function () {
        var $compile, $rootScope;

        // Load the header module, which contains the header directive
        beforeEach(module('header'));

        // Load the templates
        beforeEach(module('/snippets/header.html'));

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
    });
}());
