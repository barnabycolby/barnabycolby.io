/*global module, require */
(function () {
    'use strict';

    module.exports = {

        options: {
            paths: ['.']
        },
        main: {
            files: {
                '<%= destinationWorkingDirectory %>/css/custom.css': '<%= sourceWorkingDirectory %>/less/stylesheet.less'
            }
        }

    };
}());
