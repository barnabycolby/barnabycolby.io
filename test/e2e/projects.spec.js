/*global
    describe, require, browser, beforeEach, expect, it, console, element, by
*/

(function () {
    'use strict';

    var ProjectsPage = function () {
        this.getProjectHeaderTextByIndex = function (i) {
            return element.all(by.css('.project > h3')).get(i).getText();
        };

        this.getProjectDescriptionTextByIndex = function (i) {
            return element.all(by.css('.project > p')).get(i).getText();
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
