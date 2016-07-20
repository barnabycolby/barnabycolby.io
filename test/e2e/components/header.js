/*global beforeEach, browser, describe, it, expect */
(function () {
    'use strict';

    var HeaderTest = function () {
        var existsAndIsVisible = function (selector) {
            expect(browser.isExisting(selector)).toBe(true);
            expect(browser.isVisible(selector)).toBe(true);
        }

        this.test = function () {
            describe("The header", function () {
                it('should contain my name as a link to the homepage', function () {
                    var selector = '#header a[href="/"]';
                    existsAndIsVisible(selector);
                    expect(browser.getText(selector)).toBe('Barnaby Colby');
                });

                it('should contain a link to the projects page', function () {
                    var selector = '#header ul.nav a[href="/projects.html"]';
                    existsAndIsVisible(selector);
                    expect(browser.getText(selector)).toBe('Projects');
                });
            });
        }
    };

    module.exports = HeaderTest;
}());
