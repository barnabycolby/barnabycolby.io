/*global
    describe, require, browser, beforeEach, expect
*/

(function () {
    'use strict';

    describe('index page', function () {
        var FooterTest, footerTest,
            Variables, variables;

        Variables = require('./variables.js');
        variables = new Variables();

        beforeEach(function () {
            browser.url(variables.websiteUrl + '/');
        });

        FooterTest = require('./components/footer.js');
        footerTest = new FooterTest();
        footerTest.test();
    });
}());
