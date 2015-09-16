/*global
    describe, it, expect, element, by
*/

(function () {
    'use strict';

    var HeaderPageObject = function () {
        this.test = function () {
            describe('header', function () {
                it('should contain my name as a link to the homepage', function () {
                    var nameElement = element(by.css('#header a[href="/"]'));
                    expect(nameElement.isPresent()).toBe(true);
                    expect(nameElement.getText()).toBe('Barnaby Colby');
                });

                it('should contain a link to the projects page', function () {
                    var projectsElement = element(by.css('#header ul.nav a[href="/projects.html"]'));
                    expect(projectsElement.isPresent()).toBe(true);
                    expect(projectsElement.getText()).toBe('Projects');
                });
            });
        }
    };

    module.exports = HeaderPageObject;
}());
