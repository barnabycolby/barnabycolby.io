/*global
    describe, beforeEach, module, inject, it, expect, console
*/

(function () {
    'use strict';
    describe('The contact buttons directive ->', function () {
        var $compile, $rootScope, $httpBackend, numberOfNonCommentChildNodes;

        // Load the footer module, which contains the footer directive
        beforeEach(module('footer'));

        // Load the templates
        beforeEach(module('/snippets/contactButtons.tmpl.html'));

        // Store references to $rootScope and $compile
        // so they are available in all tests in this describe block
        beforeEach(inject(function ($injector) {
            $compile = $injector.get('$compile');
            $rootScope = $injector.get('$rootScope');
            $httpBackend = $injector.get('$httpBackend');
        }));

        numberOfNonCommentChildNodes = function (element) {
            var numberOfNonCommentNodes = element.children().filter(function () {
                return this.nodeType !== 8;
            });

            return numberOfNonCommentNodes.length;
        };

        it('should be empty when contactButtons.json does not exist', function () {
            var element;

            $httpBackend.whenGET('/data/contactButtons.json').respond(404, '');
            element = $compile("<contactbuttons></contactbuttons>")($rootScope);
            $rootScope.$digest();
            $httpBackend.flush();

            expect(numberOfNonCommentChildNodes(element)).toBe(0);
        });

        it('should be empty when contactButtons.json is empty', function () {
            var element;

            $httpBackend.whenGET('/data/contactButtons.json').respond(200, '');
            element = $compile("<contactbuttons></contactbuttons>")($rootScope);
            $rootScope.$digest();
            $httpBackend.flush();

            expect(numberOfNonCommentChildNodes(element)).toBe(0);
        });

        it('should have a contactButtons property equal to the contents of the json file', function () {
            var element,
                contactButtonsJSON,
                googleContactButton,
                googleContactButtonImage,
                linkedinContactButton,
                linkedinContactButtonImage;

            contactButtonsJSON = [
                { "href": "https://www.google.co.uk", "faCode": "google" },
                { "href": "https://www.linkedin.co.uk", "faCode": "linkedin" }
            ];

            $httpBackend.whenGET('/data/contactButtons.json').respond(200, JSON.stringify(contactButtonsJSON));
            element = $compile("<contactbuttons></contactbuttons>")($rootScope);
            $rootScope.$digest();
            $httpBackend.flush();

            googleContactButton = element.find('a[href="https://www.google.co.uk"]');
            expect(googleContactButton.length).toBe(1);
            googleContactButtonImage = googleContactButton.find('span[class*="fa-google"]');
            expect(googleContactButtonImage.length).toBe(1);

            linkedinContactButton = element.find('a[href="https://www.linkedin.co.uk"]');
            expect(linkedinContactButton.length).toBe(1);
            linkedinContactButtonImage = linkedinContactButton.find('span[class*="fa-linkedin"]');
            expect(linkedinContactButtonImage.length).toBe(1);
        });
    });
}());
