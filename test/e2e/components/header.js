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
                it('should contain a link to the projects page', function () {
                    var selector = '#navigation li a[href="/projects.html"]';
                    helper.existsAndIsVisible(selector);
                    expect(browser.getText(selector)).toBe('Projects');
                });
            });
        }
    };

    module.exports = HeaderTest;
}());
