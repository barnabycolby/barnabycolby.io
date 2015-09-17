/*global module */
(function () {
    'use strict';

    module.exports = {

        includes: {
            expand: true,
            cwd: '<%= sourceWorkingDirectory %>',
            src: ['*.html', '!boilerplate.html'],
            dest: '<%= destinationWorkingDirectory %>/'
        },
        css: {
            expand: true,
            cwd: '<%= destinationWorkingDirectory %>',
            src: ['*.html'],
            dest: '<%= destinationWorkingDirectory %>/'
        }

    };

}());
