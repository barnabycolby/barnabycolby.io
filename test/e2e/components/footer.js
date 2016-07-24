/*global beforeEach, browser, describe, it, expect */
(function () {
    'use strict';

    var FooterTest = function () {
        var existsAndIsVisible = function (selector) {
            expect(browser.isExisting(selector)).toBe(true);
            expect(browser.isVisible(selector)).toBe(true);
        }

        this.test = function () {
            describe("The footer", function () {
                it('should contain a link to my email address', function () {
                    existsAndIsVisible('#footer a[href="mailto:barnaby.colby@gmail.com"]');
                });

                it('should contain a link to my linkedin profile', function () {
                    existsAndIsVisible('#footer a[href="https://uk.linkedin.com/in/barnabycolby"]');
                });

                it('should contain a link to my github profile', function () {
                    existsAndIsVisible('#footer a[href="https://github.com/barnabycolby"]');
                });

                it("should contain copyright text", function () {
                    var copyrightElementText, currentYear;
                    copyrightElementText = browser.getText('#copyright');
                    currentYear = new Date().getFullYear();
                    expect(copyrightElementText).toBe('© ' + currentYear + ' Barnaby Colby. All rights reserved.');
                });
            });
        }
    };

    module.exports = FooterTest;
}());
