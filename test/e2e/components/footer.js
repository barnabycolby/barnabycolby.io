/*global
    describe, it, expect, element, by
*/

(function () {
    'use strict';

    var FooterPageObject = function () {
        this.test = function () {
            describe('footer', function () {
                it('should contain a link to my email address', function () {
                    browser.get('https://www.barnabycolby.io');
                    var emailElement = element(by.css('a[href="mailto:barnaby.colby@gmail.com"]'));
                    expect(emailElement.isPresent()).toBe(true);
                });
            });
        }
    };

    module.exports = FooterPageObject;
}());
