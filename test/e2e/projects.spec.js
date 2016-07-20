/*global
    expect, require, it, describe, beforeEach, browser
*/

(function () {
    'use strict';

    var ProjectsPage = function () {
        this.getProjectHeaderTextByIndex = function (i) {
            var elementId = browser.elements('.project > h3').value[i].ELEMENT;
            return browser.elementIdText(elementId).value;
        };

        this.getProjectDescriptionTextByIndex = function (i) {
            var elementId = browser.elements('.project > p').value[i].ELEMENT;
            return browser.elementIdText(elementId).value;
        };
    };

    describe('projects page', function () {
        var FooterTest, footerTest,
            HeaderTest, headerTest,
            Variables, variables;

        Variables = require('./variables.js');
        variables = new Variables();

        beforeEach(function () {
            var page = '/projects.html';
            browser.url(variables.websiteUrl + page);
        });

        FooterTest = require('./components/footer.js');
        footerTest = new FooterTest();
        footerTest.test();

        HeaderTest = require('./components/header.js');
        headerTest = new HeaderTest();
        headerTest.test();

        it('should contain the details of each project', function () {
            var projectsPage, expectedProjectsData, expectedProjectData, i;

            projectsPage = new ProjectsPage();

            expectedProjectsData = require('../../dist/www/data/projects.json');
            expect(expectedProjectsData).toBeTruthy();
            for (i = 0; i < expectedProjectsData.length; i += 1) {
                expectedProjectData = expectedProjectsData[i];
                expect(projectsPage.getProjectHeaderTextByIndex(i)).toBe(expectedProjectData.name);
                expect(projectsPage.getProjectDescriptionTextByIndex(i)).toBe(expectedProjectData.description);
            }
        });
    });
}());
