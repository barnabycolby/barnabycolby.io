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

        this.linkExistsAndIsVisible = function (selector, expectedHref) {
            var elementId, actualHref;

            // Check the element exists
            this.existsAndIsVisible(selector);

            // Check the element href
            elementId = browser.element(selector).value.ELEMENT;
            actualHref = browser.elementIdAttribute(elementId, 'href').value;
            expect(actualHref).toBe(expectedHref);
        };
    };

    module.exports = Helper;
}());
