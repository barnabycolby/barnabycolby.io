/*global module, require */
(function () {
    'use strict';

    module.exports = {

        source: {
            options: {
                paths: ['.'],
                plugins: [
                    new (require('less-plugin-autoprefix'))({browsers: '> 5%'}),
                    new (require('less-plugin-clean-css'))()
                ]
            },
            files: {
                '<%= destinationWorkingDirectory %>/css/stylesheet.min.css': '<%= sourceWorkingDirectory %>/less/stylesheet.less'
            }
        }

    };
}());
