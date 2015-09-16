/*global
    describe, require, browser, beforeEach, expect
*/

(function () {
    'use strict';

    describe('index page', function () {
        var FooterPageObject, footerPageObject,
            Variables, variables;

        Variables = require('./variables.js');
        variables = new Variables();

        beforeEach(function () {
            browser.get(variables.websiteUrl + '/');
            expect(browser.getCurrentUrl()).toBe(variables.websiteUrl + '/');
        });

        FooterPageObject = require('./components/footer.js');
        footerPageObject = new FooterPageObject();
        footerPageObject.test();
    });
}());