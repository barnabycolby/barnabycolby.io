/*global module, require */
(function () {
    'use strict';

    module.exports = {

        options: {
            paths: ['.']
        },
        main: {
            options: {
                sourceMap: true,
                sourceMapURL: '/css/stylesheet.css.map',
                outputSourceFiles: true
            },
            files: {
                '<%= destinationWorkingDirectory %>/css/custom.css': '<%= sourceWorkingDirectory %>/less/stylesheet.less'
            }
        }

    };
}());
