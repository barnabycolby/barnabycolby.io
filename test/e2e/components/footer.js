/*global
    describe, it, expect, element, by
*/

(function () {
    'use strict';

    var FooterPageObject = function () {
        this.test = function () {
            describe('footer', function () {
                it('should contain a link to my email address', function () {
                    var emailElement = element(by.css('a[href="mailto:barnaby.colby@gmail.com"]'));
                    expect(emailElement.isPresent()).toBe(true);
                });

                it('should contain a link to my linkedin profile', function () {
                    var linkedinElement = element(by.css('a[href="https://uk.linkedin.com/in/barneycolby"]'));
                    expect(linkedinElement.isPresent()).toBe(true);
                });

                it('should contain a link to my github profile', function () {
                    var githubElement = element(by.css('a[href="https://github.com/barnabycolby"]'));
                    expect(githubElement.isPresent()).toBe(true);
                });

                it('should contain copyright text', function () {
                    var copyrightElement = element(by.css('#copyright'));
                    expect(copyrightElement.getText()).toBe('© 2015 Barnaby Colby. All rights reserved.');
                });
            });
        }
    };

    module.exports = FooterPageObject;
}());
