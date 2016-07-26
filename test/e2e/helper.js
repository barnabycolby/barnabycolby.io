/*global expect, browser, module */
(function () {
    'use strict';

    var Helper = function () {
        this.existsAndIsVisible = function (selector) {
            expect(browser.isExisting(selector)).toBe(true);
            expect(browser.isVisible(selector)).toBe(true);
        };

        /**
         * Checks an element exists and is visible as well as displaying the expected text.
         */
        this.existsAndIsVisibleWithGivenText = function (selector, expectedText) {
            this.existsAndIsVisible(selector);
            expect(browser.getText(selector)).toBe(expectedText);
        };
    };

    module.exports = Helper;
}());
