/*global
    describe, beforeEach, module, inject, it, expect
*/

(function () {
    'use strict';
    describe('The projects element directive', function () {
        var $compile, $rootScope, $httpBackend, testData, compileElement;

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

        testData = '[{"name":"Website"},{"name":"Backup Server"},{"name":"VPN Server"}]';

        compileElement = function () {
            var element = $compile("<projects></projects>")($rootScope);
            $rootScope.$digest();
            $httpBackend.flush();

            return element;
        };

        it('does not expand to anything when projects.json is empty', function () {
            $httpBackend.whenGET('/data/projects.json').respond(200, '');
            var element = compileElement();
            expect(element.find('h3').length).toBe(0);
        });

        it('does not expand to anything when projects.json contains an empty array', function () {
            $httpBackend.whenGET('/data/projects.json').respond(200, '[]');
            var element = compileElement();
            expect(element.find('h3').length).toBe(0);
        });

        it('creates a h3 element for each object in the array with the correct text', function () {
            var element, h3s;
            $httpBackend.whenGET('/data/projects.json').respond(200, testData);
            element = compileElement();

            h3s = element.find('h3');
            expect(h3s.length).toBe(3);
            expect(h3s.eq(0).text()).toBe('Website');
            expect(h3s.eq(1).text()).toBe('Backup Server');
            expect(h3s.eq(2).text()).toBe('VPN Server');
        });

        /*
        it('creates a p element for each object in the array with the correct description', function () {
        
        });
        */
    });
}());
