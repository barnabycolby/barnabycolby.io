/*global beforeEach, browser, describe, it, expect, require, module */
(function () {
    'use strict';

    var HeaderTest = function () {
        var Helper, helper;
        Helper = require('../helper.js');
        helper = new Helper();

        this.test = function () {
            describe("The header", function () {
                it('should contain my name as a link to the homepage', function () {
                    var selector = '#header a[href="/"]';
                    helper.existsAndIsVisible(selector);
                    expect(browser.getText(selector)).toBe('Barnaby Colby');
                });
            });

            this.testNavigation();
        };

        this.testNavigation = function () {
            describe("navigation bar", function () {
                it('should contain all navigation links', function () {
                    var i, navigationLink, selector,
                        navigationLinks = require('../../../src/www/data/navigation.json').navigationLinks;

                    for (i = 0; i < navigationLinks.length; i += 1) {
                        navigationLink = navigationLinks[i];
                        selector = '#navigation li a[href="' + navigationLink.href + '"]';

                        helper.existsAndIsVisible(selector);
                        expect(browser.getText(selector)).toBe(navigationLink.text);
                    }
                });
            });
        };
    };

    module.exports = HeaderTest;
}());
