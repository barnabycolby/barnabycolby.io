/*global
    expect, require, it, describe, beforeEach, browser
*/
/*jslint regexp: true */

(function () {
    'use strict';

    var ProjectsPage, Helper, helper;

    ProjectsPage = function () {
        this.getProjectHeaderTextByIndex = function (i, selectorPrefix) {
            var selector = selectorPrefix + ' .project h3',
                elementId = browser.elements(selector).value[i].ELEMENT;
            return browser.elementIdText(elementId).value;
        };

        this.getProjectDescriptionTextByIndex = function (i, selectorPrefix) {
            var selector = selectorPrefix + ' .project > p',
                elementId = browser.elements(selector).value[i].ELEMENT;
            return browser.elementIdText(elementId).value;
        };

        this.getProjectLinkByIndex = function (i, selectorPrefix) {
            // We can't just use the selector '.project > a' as not all projects have links
            var selector = selectorPrefix + ' .project',
                projectElementId = browser.elements(selector).value[i].ELEMENT,
                linkElementId = browser.elementIdElement(projectElementId, 'a').value.ELEMENT;
            return browser.elementIdAttribute(linkElementId, 'href').value;
        };

        /**
         * Checks that the projects described by the expectedProjectsData are being displayed correctly within the projects found within the
         * given selector elements.
         */
        this.checkProjectsAreShown = function (expectedProjectsData, selectorPrefix) {
            var i, expectedProjectData, link;

            expect(expectedProjectsData).toBeTruthy();
            for (i = 0; i < expectedProjectsData.length; i += 1) {
                expectedProjectData = expectedProjectsData[i];
                expect(this.getProjectHeaderTextByIndex(i, selectorPrefix)).toBe(expectedProjectData.name);
                expect(this.getProjectDescriptionTextByIndex(i, selectorPrefix)).toBe(this.htmlToText(expectedProjectData.description));

                // If the project has a link, check that it is displayed correctly
                link = expectedProjectData.link;
                if (link !== undefined) {
                    expect(this.getProjectLinkByIndex(i, selectorPrefix)).toBe(link);
                }
            }
        };

        this.htmlToText = function (htmlString) {
            return htmlString.replace(/<(?:.|\n)*?>/gm, '');
        };
    };

    Helper = require('./helper.js');
    helper = new Helper();

    describe('projects page', function () {
        var FooterTest, footerTest,
            HeaderTest, headerTest,
            Variables, variables,
            projectData, projectsPage;

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

        projectsPage = new ProjectsPage();

        it('should contain some introduction text', function () {
            var expectedText = projectData.introduction;
            helper.existsAndIsVisibleWithGivenText('#introduction', expectedText);
        });

        it('should display the current project', function () {
            var currentProject = projectData.current;
            helper.existsAndIsVisibleWithGivenText('#current > h1', currentProject.name);
            helper.existsAndIsVisibleWithGivenText('#current > p', projectsPage.htmlToText(currentProject.description));

            if (currentProject.link !== undefined) {
                helper.linkExistsAndIsVisible('#current > a', currentProject.link);
            }
        });

        it('should contain the details of each project', function () {
            projectsPage.checkProjectsAreShown(projectData.past, '#past');
            projectsPage.checkProjectsAreShown(projectData.future, '#future');
        });
    });
}());
