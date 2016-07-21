/*global module */
(function () {
    'use strict';

    module.exports = {

        main: {
            expand: true,
            cwd: '<%= sourceWorkingDirectory %>',
            src: ['data/**/*.json', '!data/navigation.json'],
            dest: '<%= destinationWorkingDirectory %>'
        }

    };
}());
