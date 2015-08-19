/*global module */
(function () {
    'use strict';

    module.exports = {

        source: {
            expand: true,
            cwd: '<%= sourceWorkingDirectory %>',
            src: 'less/**/*.less',
            dest: '<%= sourceWorkingDirectory %>'
        }

    };
}());
