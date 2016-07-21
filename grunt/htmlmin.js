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
            // processhtml comments should be ignored
            ignoreCustomComments: [new RegExp(' (\/?)build(.*)')]
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
            src: ['snippets/**/*.html', '!snippets/header.tmpl.html'],
            dest: '<%= destinationWorkingDirectory %>'
        }

    };
}());
