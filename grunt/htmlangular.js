/*global module */
(function () {
    'use strict';

    module.exports = {

        options: {
            relaxerror: ['Comments seen before doctype. Internet Explorer will go into the quirks mode.'],
            customtags: ['header', 'footer', 'projects', 'contactbuttons'],
            reportpath: null,
            reportCheckstylePath: null,
            charset: false
        },
        source: {
            expand: true,
            cwd: '<%= sourceWorkingDirectory %>',
            // commonheadtags.tmpl.html must be ignored as htmlangular is not smart enough to wrap head tags for the W3C validator
            src: ['*.html', 'snippets/*.html', '!snippets/commonheadtags.tmpl.html']
        },
        distribution: {
            expand: true,
            cwd: '<%= destinationWorkingDirectory %>',
            // commonheadtags.tmpl.html must be ignored as htmlangular is not smart enough to wrap head tags for the W3C validator
            src: ['*.html', 'snippets/*.html', '!snippets/commonheadtags.tmpl.html']
        }

    };
}());
