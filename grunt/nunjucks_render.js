/*global module */
(function () {
    'use strict';

    module.exports = {
        main: {
            expand: true,
            cwd: '<%= sourceWorkingDirectory %>',
            src: ['*.html', '!boilerplate.html'],
            dest: '<%= destinationWorkingDirectory %>/',
            data: '<%= sourceWorkingDirectory %>/data/*.json'
        }
    };
}());
