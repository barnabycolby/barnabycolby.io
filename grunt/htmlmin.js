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
            minifyCSS: true
        },
        webpages: {
            expand: true,
            cwd: '<%= destinationWorkingDirectory %>',
            src: ['*.html', '!boilerplate.html'],
            dest: '<%= destinationWorkingDirectory %>'
        },
        snippets: {
            expand: true,
            cwd: '<%= sourceWorkingDirectory %>',
            src: ['snippets/**/*.html'],
            dest: '<%= destinationWorkingDirectory %>'
        }

    };
}());
