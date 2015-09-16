/*global
    describe, require, browser, beforeEach, expect
*/

(function () {
    'use strict';

    describe('index page', function () {
        var FooterPageObject, footerPageObject;

        beforeEach(function () {
            browser.get('https://www.barnabycolby.io/');
            expect(browser.getCurrentUrl()).toBe('https://www.barnabycolby.io/');
        });

        FooterPageObject = require('./components/footer.js');
        footerPageObject = new FooterPageObject();
        footerPageObject.test();
    });
}());
