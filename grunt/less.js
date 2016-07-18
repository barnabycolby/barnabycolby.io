/*global module, require */
(function () {
    'use strict';

    module.exports = {

        options: {
            paths: ['.']
        },
        main: {
            files: {
                // Temporarily changed the destination from custom.css to stylesheet.css, allowing us to bypass the uncss step
                // As uncss is broken right now (doesn't handle urls as sources)
                '<%= destinationWorkingDirectory %>/css/custom.css': '<%= sourceWorkingDirectory %>/less/stylesheet.less'
            }
        }

    };
}());
