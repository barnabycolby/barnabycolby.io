/*global
    describe, require, browser, beforeEach, expect
*/

(function () {
    'use strict';

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
    });
}());
