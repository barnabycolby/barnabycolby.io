/*global module, require */
(function () {
    'use strict';

    module.exports = {

        options: {
            processors: [
                require('autoprefixer-core')({browsers: '> 5%'}),
                require('cssnano')()
            ]
        },
        main: {
            src: '<%= destinationWorkingDirectory %>/css/stylesheet.css',
            dest: '<%= destinationWorkingDirectory %>/css/stylesheet.min.css'
        }

    };
}());
