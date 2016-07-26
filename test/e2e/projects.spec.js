/*global
    expect, require, it, describe, beforeEach, browser, console
*/

(function () {
    'use strict';

    var ProjectsPage, Helper, helper;

    ProjectsPage = function () {
        this.getProjectHeaderTextByIndex = function (i) {
            var elementId = browser.elements('.project h3').value[i].ELEMENT;
            return browser.elementIdText(elementId).value;
        };

        this.getProjectDescriptionTextByIndex = function (i) {
            var elementId = browser.elements('.project > p').value[i].ELEMENT;
            return browser.elementIdText(elementId).value;
        };

        this.getProjectLinkByIndex = function (i) {
            // We can't just use the selector '.project > a' as not all projects have links
            var projectElementId = browser.elements('.project').value[i].ELEMENT,
                linkElementId = browser.elementIdElement(projectElementId, 'a').value.ELEMENT;
            return browser.elementIdAttribute(linkElementId, 'href').value;
        };
    };

    Helper = require('./helper.js');
    helper = new Helper();

    describe('projects page', function () {
        var FooterTest, footerTest,
            HeaderTest, headerTest,
            Variables, variables,
            projectData;

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

        projectData = require('../../src/www/data/projects.json').projects;

        it('should contain some introduction text', function () {
            var expectedText = projectData.introduction;
            helper.existsAndIsVisibleWithGivenText('#introduction', expectedText);
        });

        it('should contain the details of each project', function () {
            var projectsPage, expectedProjectsData, expectedProjectData, i, link;

            projectsPage = new ProjectsPage();

            expectedProjectsData = projectData.projects;
            expect(expectedProjectsData).toBeTruthy();
            for (i = 0; i < expectedProjectsData.length; i += 1) {
                expectedProjectData = expectedProjectsData[i];
                expect(projectsPage.getProjectHeaderTextByIndex(i)).toBe(expectedProjectData.name);
                expect(projectsPage.getProjectDescriptionTextByIndex(i)).toBe(expectedProjectData.description);

                // If the project has a link, check that it is displayed correctly
                link = expectedProjectData.link;
                if (link !== undefined) {
                    expect(projectsPage.getProjectLinkByIndex(i)).toBe(link);
                }
            }
        });
    });
}());
