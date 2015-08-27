/*global
    describe, beforeEach, module, inject, it, expect
*/

(function () {
    'use strict';
    describe('The footer element directive', function () {
        var $compile, $rootScope;

        // Load the footer module, which contains the footer directive
        beforeEach(module('footer'));

        // Load the templates
        beforeEach(module('/snippets/footer.tmpl.html'));

        // Store references to $rootScope and $compile
        // so they are available in all tests in this describe block
        beforeEach(inject(function ($injector) {
            var $httpBackend, contactButtonsJSON;

            $compile = $injector.get('$compile');
            $rootScope = $injector.get('$rootScope');
            $httpBackend = $injector.get('$httpBackend');

            contactButtonsJSON = [
                { "href": "http://github.com", "faCode": "github" }
            ];
            $httpBackend.whenGET('/snippets/contactButtons.tmpl.html')
                .respond(200, JSON.stringify(contactButtonsJSON));
        }));

        it('contains a set of contact buttons', function () {
            var element, contactButtonsMatches;

            element = $compile("<footer></footer>")($rootScope);
            $rootScope.$digest();

            contactButtonsMatches = element.find('contactbuttons');

            expect(contactButtonsMatches.length).toBeGreaterThan(0);
        });
    });
}());
