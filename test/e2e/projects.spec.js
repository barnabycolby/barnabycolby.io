/*global
    describe, require, browser, beforeEach, expect, it, console, element, by
*/

(function () {
    'use strict';

    var ProjectsPage = function () {
        this.getProjectHeaderTextByIndex = function (i) {
            // We're using a 0-index system, so 1 needs to be added when using nth-child
            var nthChildIndex = i + 1;
            return element(by.css('.project:nth-child(' + nthChildIndex + ') > h3')).getText();
        };

        this.getProjectDescriptionTextByIndex = function (i) {
            // We're using a 0-index system, so 1 needs to be added when using nth-child
            var nthChildIndex = i + 1;
            return element(by.css('.project:nth-child(' + nthChildIndex + ') > p')).getText();
        };
    };

    describe('projects page', function () {
        var FooterPageObject, footerPageObject,
            HeaderPageObject, headerPageObject,
            Variables, variables;

        Variables = require('./variables.js');
        variables = new Variables();

        beforeEach(function () {
            var page = '/projects.html';
            browser.get(variables.websiteUrl + page);
            expect(browser.getCurrentUrl()).toBe(variables.websiteUrl + page);
        });

        FooterPageObject = require('./components/footer.js');
        footerPageObject = new FooterPageObject();
        footerPageObject.test();

        HeaderPageObject = require('./components/header.js');
        headerPageObject = new HeaderPageObject();
        headerPageObject.test();

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
