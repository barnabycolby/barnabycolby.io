/*global module */
(function () {
    'use strict';

    module.exports = {

        main: {
            expand: true,
            cwd: '<%= sourceWorkingDirectory %>',
            src: ['favicon.ico', 'data/**'],
            dest: '<%= destinationWorkingDirectory %>'
        }

    };
}());
