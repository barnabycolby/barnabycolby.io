/*global module, require */
(function () {
    'use strict';

    module.exports = {

        options: {
            paths: ['.']
        },
        main: {
            files: {
                '<%= destinationWorkingDirectory %>/css/custom.css': '<%= sourceWorkingDirectory %>/less/stylesheet.less',
                '<%= destinationWorkingDirectory %>/css/index.css': '<%= sourceWorkingDirectory %>/less/index.less',
                '<%= destinationWorkingDirectory %>/css/projects.css': '<%= sourceWorkingDirectory %>/less/projects.less'
            }
        }

    };
}());
