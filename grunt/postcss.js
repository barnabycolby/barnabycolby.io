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
            src: '<%= destinationWorkingDirectory %>/css/stylesheet.css',
            dest: '<%= destinationWorkingDirectory %>/css/stylesheet.min.css'
        }

    };
}());
