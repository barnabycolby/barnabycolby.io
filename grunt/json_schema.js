/*global module */
(function () {
    'use strict';

    module.exports = {

        options: {
            validateFormatsStrict: true
        },
        main: {
            expand: true,
            cwd: '<%= sourceWorkingDirectory %>/data',
            src: ['*.json'],
            dest: '<%= sourceWorkingDirectory %>/schemas'
        }

    };
}());
