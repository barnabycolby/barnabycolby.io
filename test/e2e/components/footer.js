/*global beforeEach, browser, describe, it, expect, require, module */
(function () {
    'use strict';

    var FooterTest = function () {
        var Helper, helper;
        Helper = require('../helper.js');
        helper = new Helper();

        this.test = function () {
            describe("The footer", function () {
                it('should contain a link to my email address', function () {
                    helper.existsAndIsVisible('#footer a[href="mailto:barnaby.colby@gmail.com"]');
                });

                it('should contain a link to my linkedin profile', function () {
                    helper.existsAndIsVisible('#footer a[href="https://uk.linkedin.com/in/barnabycolby"]');
                });

                it('should contain a link to my github profile', function () {
                    helper.existsAndIsVisible('#footer a[href="https://github.com/barnabycolby"]');
                });

                it("should contain copyright text", function () {
                    var currentYear = new Date().getFullYear(),
                        expectedText = '© ' + currentYear + ' Barnaby Colby. All rights reserved.';
                    helper.existsAndIsVisibleWithGivenText('#copyright', expectedText);
                });
            });
        };
    };

    module.exports = FooterTest;
}());
