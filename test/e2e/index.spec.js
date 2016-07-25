/*global
    describe, require, browser, beforeEach, expect, it
*/

(function () {
    'use strict';

    describe('index page', function () {
        var FooterTest, footerTest,
            HeaderTest, headerTest,
            Variables, variables,
            Helper, helper;

        Variables = require('./variables.js');
        variables = new Variables();

        Helper = require('./helper.js');
        helper = new Helper();

        beforeEach(function () {
            browser.url(variables.websiteUrl + '/');
        });

        FooterTest = require('./components/footer.js');
        footerTest = new FooterTest();
        footerTest.test();

        // We utilise the header tests to test the navigation links as
        // the functionality on the index page should be the same and
        // is only styled differently
        HeaderTest = require('./components/header.js');
        headerTest = new HeaderTest();
        headerTest.testNavigation();

        it('should display my name', function () {
            var selector = '.container > h1';
            helper.existsAndIsVisible(selector);
            expect(browser.getText(selector)).toBe('Barnaby Colby');
        });

        it('should display the blurb', function () {
            var indexData = require('../../src/www/data/index.json'),
                selector = '.container > h3',
                actualText = browser.getHTML(selector, false);
            helper.existsAndIsVisible(selector);
            expect(actualText).toBe(indexData.blurb);
        });
    });
}());
