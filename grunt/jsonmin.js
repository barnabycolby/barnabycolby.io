/*global module */
(function () {
    'use strict';

    module.exports = {

        source: {
            expand: true,
            cwd: '<%= sourceWorkingDirectory %>',
            src: 'data/**/*.json',
            dest: '<%= destinationWorkingDirectory %>'
        }

    };
}());
