/*global module, require */
(function () {
    'use strict';

    module.exports = {

        options: {
            processors: [
                require('autoprefixer')({browsers: '> 5%'}),
                require('cssnano')({ discardComments: { removeAll: true } })
            ]
        },
        main: {
            files: {
                '<%= destinationWorkingDirectory %>/css/stylesheet.min.css': '<%= destinationWorkingDirectory %>/css/stylesheet.css',
                '<%= destinationWorkingDirectory %>/css/index.min.css': '<%= destinationWorkingDirectory %>/css/index.css'
            }
        }

    };
}());
