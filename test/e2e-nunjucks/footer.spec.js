/*global beforeEach, browser, describe, it, expect */
(function () {
    'use strict';

    beforeEach(function () {
        browser.url('https://test.barnabycolby.io/');
    });

    describe("The footer", function () {
        it("should contain copyright text", function () {
            var copyrightElementText, currentYear;
            copyrightElementText = browser.getText('#copyright');
            currentYear = new Date().getFullYear();
            expect(copyrightElementText).toBe('© ' + currentYear + ' Barnaby Colby. All rights reserved.');
        });
    });
}());
