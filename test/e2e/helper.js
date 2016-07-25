(function () {
    'use strict';

    var Helper = function () {
        this.existsAndIsVisible = function (selector) {
            expect(browser.isExisting(selector)).toBe(true);
            expect(browser.isVisible(selector)).toBe(true);
        }
    };

    module.exports = Helper;
}());
