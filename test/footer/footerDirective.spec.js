/*global
    describe, beforeEach, module, inject, it, expect
*/

(function () {
    'use strict';
    describe('The footer element directive', function () {
        var $compile, $rootScope;

        // Load the footer module, which contains the footer directive
        beforeEach(module('footer'));

        // Load the templates
        beforeEach(module('/snippets/footer.tmpl.html'));

        // Store references to $rootScope and $compile
        // so they are available in all tests in this describe block
        /*jslint nomen: true*/
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        /*jslint nomen: false*/

        it('contains a link to my email address', function () {
            var element, mailToLinkMatches;

            element = $compile("<footer></footer>")($rootScope);
            $rootScope.$digest();

            mailToLinkMatches = element.find('a[href="mailto:barneycolby@gmail.com"]');

            expect(mailToLinkMatches.length).toBeGreaterThan(0);
        });
    });
}());
