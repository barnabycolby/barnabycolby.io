/*global module */
(function () {
    'use strict';

    module.exports = {

        main: {
            expand: true,
            cwd: '<%= sourceWorkingDirectory %>',
            src: 'less/**/*.less',
            dest: '<%= sourceWorkingDirectory %>'
        }

    };
}());
