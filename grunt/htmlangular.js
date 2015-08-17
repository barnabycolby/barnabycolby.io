/*global module */
(function () {
    'use strict';

    module.exports = {

        options: {
            relaxerror: ['Comments seen before doctype. Internet Explorer will go into the quirks mode.'],
            customtags: ['header', 'footer', 'projects'],
            reportpath: null,
            charset: false
        },
        source: {
            expand: true,
            cwd: 'source/www/',
            // commonheadtags.tmpl.html must be ignored as htmlangular is not smart enough to wrap head tags for the W3C validator
            src: ['*.html', 'snippets/*.html', '!snippets/commonheadtags.tmpl.html']
        },
        production: {
            expand: true,
            cwd: 'production/www/',
            // commonheadtags.tmpl.html must be ignored as htmlangular is not smart enough to wrap head tags for the W3C validator
            src: ['*.html', 'snippets/*.html', '!snippets/commonheadtags.tmpl.html']
        }

    };
}());
