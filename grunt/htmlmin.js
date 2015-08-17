/*global module */
(function () {
    'use strict';

    module.exports = {

        options: {
            removeComments: true,
            removeCommentsFromCDATA: true,
            removeCDATASectionsFromCDATA: true,
            collapseWhitespace: true,
            collapseBooleanAttributes: true,
            removeRedundantAttributes: true,
            removeIgnored: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            // SSI statements need to be ignored
            ignoreCustomComments: [new RegExp('#(.*)')]
        },
        webpages: {
            expand: true,
            cwd: 'source/www',
            src: ['*.html', '!boilerplate.html'],
            dest: 'production/www/'
        },
        snippets: {
            expand: true,
            cwd: 'source/www/snippets',
            src: ['**/*.html'],
            dest: 'production/www/snippets/'
        }

    };
}());
