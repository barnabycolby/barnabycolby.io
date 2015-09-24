/*global
    describe, beforeEach, module, inject, it, expect
*/

(function () {
    'use strict';
    describe('The projects element directive', function () {
        var $compile, $rootScope, $httpBackend, testData, testDataString, compileElement, dataFileUrl;

        // Load the project module, which contains the projects directive
        beforeEach(module('projects'));

        // Load the templates
        beforeEach(module('/snippets/projects.tmpl.html'));

        // Store references to $rootScope and $compile
        // so they are available in all tests in this describe block
        beforeEach(inject(function ($injector) {
            $compile = $injector.get('$compile');
            $rootScope = $injector.get('$rootScope');
            $httpBackend = $injector.get('$httpBackend');
        }));

        testData = [
            {
                name: "Website",
                description: "What you're looking at."
            },
            {
                name: "Backup Server",
                description: "For backups."
            },
            {
                name: "VPN Server",
                description: "So that I can work on the other projects from Starbucks."
            }
        ];
        testDataString = JSON.stringify(testData);

        dataFileUrl = '/data/projects.json';

        compileElement = function () {
            var element = $compile("<projects></projects>")($rootScope);
            $rootScope.$digest();
            $httpBackend.flush();

            return element;
        };

        it('does not expand to anything when projects.json is empty', function () {
            $httpBackend.whenGET(dataFileUrl).respond(200, '');
            var element = compileElement();
            expect(element.find('h3').length).toBe(0);
        });

        it('does not expand to anything when projects.json contains an empty array', function () {
            $httpBackend.whenGET(dataFileUrl).respond(200, '[]');
            var element = compileElement();
            expect(element.find('h3').length).toBe(0);
        });

        it('creates a h3 element for each object in the array with the correct text', function () {
            var element, h3s;
            $httpBackend.whenGET(dataFileUrl).respond(200, testDataString);
            element = compileElement();

            h3s = element.find('h3');
            expect(h3s.length).toBe(3);
            expect(h3s.eq(0).text()).toBe(testData[0].name);
            expect(h3s.eq(1).text()).toBe(testData[1].name);
            expect(h3s.eq(2).text()).toBe(testData[2].name);
        });

        /*
        it('creates a p element for each object in the array with the correct description', function () {
        
        });
        */
    });
}());
