/*global beforeEach, browser, describe, it, expect */
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
        }

        this.testNavigation = function () {
            describe("navigation bar", function () {
                it('should contain all navigation links', function () {
                    var navigationLinks = require('../../../src/www/data/navigation.json').navigationLinks;

                    for (var i = 0; i < navigationLinks.length; i++) {
                        var navigationLink = navigationLinks[i];
                        var selector = '#navigation li a[href="' + navigationLink.href + '"]';
                        helper.existsAndIsVisible(selector);
                        expect(browser.getText(selector)).toBe(navigationLink.text);
                    }
                });
            });
        }
    };

    module.exports = HeaderTest;
}());
