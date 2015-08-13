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
        beforeEach(module('/snippets/footer.html'));

        // Store references to $rootScope and $compile
        // so they are available in all tests in this describe block
        /*jslint nomen: true*/
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        /*jslint nomen: false*/

        it('contains my email address', function () {
            var element;

            element = $compile("<footer></footer>")($rootScope);
            $rootScope.$digest();

            expect(element.text()).toContain("barneycolby@gmail.com");
        });
    });
}());
